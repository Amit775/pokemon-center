#!/usr/bin/env node
/**
 * Git worktrees for parallel sessions.
 *
 * Several agents or editors working the same repo at once need more than `git worktree add`:
 * every checkout wants the same three ports, the same Postgres databases, and a `.env` that is
 * not in the repo. Left to itself the second session either fails to start or — worse — starts
 * and quietly writes to the first one's database.
 *
 * So a worktree here gets a **slot**: a small integer that shifts every port by 100 and suffixes
 * every database name. Slot 0 is the main checkout with the ports everything already documents.
 *
 *   node tools/worktree.mjs new champions-school     # create, install, allocate a slot
 *   node tools/worktree.mjs list                     # what exists, and on which ports
 *   node tools/worktree.mjs rm champions-school      # remove the worktree and its databases
 *
 * The databases are the part worth being careful about. `--shared-db` opts out of per-worktree
 * databases when you deliberately want two sessions reading the same seeded data; the default is
 * separate, because a seed or a migration in one session should never surprise another.
 */

import { execFileSync, execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';

/** Base ports for slot 0, matching what the docs and `.claude/launch.json` already say. */
const PORTS = { 'pokedex-service': 3000, 'champions-service': 3001, 'pokemon-center': 4200 };
const PORT_STRIDE = 100;

/** Postgres itself is shared — one container, many databases. Only the database names shift. */
const DATABASES = { DATABASE_URL: 'pokemon-center', DATABASE_URL_CHAMPIONS: 'pokemon-champions' };

/**
 * The repo root, as a path Node can actually use.
 *
 * Deliberately not `--show-toplevel`: Git for Windows reports `/c/Code/…`, an MSYS path that
 * `existsSync` rejects and that fails as a `cwd` with a baffling `spawnSync cmd.exe ENOENT`.
 * `--show-cdup` is relative, so resolving it against the real working directory gives a native
 * path on every platform.
 */
const ROOT = resolve(process.cwd(), execSync('git rev-parse --show-cdup', { encoding: 'utf8' }).trim() || '.');

/**
 * Slot registry, in the **common** git directory.
 *
 * Not in the working tree: every worktree has its own, so a registry there would be per-checkout
 * and two worktrees would happily claim the same slot and the same ports. `--git-common-dir` is
 * the one location all of them share, and it is never tracked, so the registry cannot be
 * committed by accident either.
 */
const GIT_COMMON = resolve(ROOT, execSync('git rev-parse --git-common-dir', { encoding: 'utf8' }).trim());
const SLOTS_FILE = join(GIT_COMMON, 'worktree-slots.json');

/**
 * `shell: true` on Windows.
 *
 * `execFileSync` there does not walk PATH the way a shell does, so bare `git`, `docker` and
 * `pnpm` all fail with ENOENT despite being perfectly available. This is a workspace people run
 * on Windows, so the portable form is the only correct one.
 */
const WIN = process.platform === 'win32';

const run = (cmd, args, opts = {}) => execFileSync(cmd, args, { stdio: 'inherit', shell: WIN, ...opts });
const capture = (cmd, args, opts = {}) => execFileSync(cmd, args, { encoding: 'utf8', shell: WIN, ...opts }).trim();

function readSlots() {
	if (!existsSync(SLOTS_FILE)) return {};
	try {
		return JSON.parse(readFileSync(SLOTS_FILE, 'utf8'));
	} catch {
		return {};
	}
}

function writeSlots(slots) {
	writeFileSync(SLOTS_FILE, `${JSON.stringify(slots, null, 2)}\n`);
}

/** Lowest unused slot, so removing a worktree frees its ports for the next one. */
function allocateSlot(slots) {
	const taken = new Set(Object.values(slots));
	for (let slot = 1; slot < 50; slot++) if (!taken.has(slot)) return slot;
	throw new Error('No free slot below 50 — remove a worktree first.');
}

const portsFor = (slot) =>
	Object.fromEntries(Object.entries(PORTS).map(([name, base]) => [name, base + slot * PORT_STRIDE]));

const dbNameFor = (base, slot, shared) => (shared || slot === 0 ? base : `${base}_wt${slot}`);

/**
 * The worktree's own `.env`.
 *
 * Copied rather than symlinked, because the whole point is that the values differ. Anything that
 * is not a database URL is carried over untouched, so a key added later needs no change here.
 *
 * Both services already read their port from the environment (`PORT`, `CHAMPIONS_PORT`), so the
 * backends need nothing beyond this file — which is untracked, and therefore cannot be committed
 * from a worktree by accident.
 */
function writeEnv(dir, slot, shared, ports) {
	const source = join(ROOT, '.env');
	if (!existsSync(source)) {
		console.warn('! No .env in the main checkout — skipping. Copy one in before serving.');
		return;
	}

	const rewritten = readFileSync(source, 'utf8')
		.split(/\r?\n/)
		.map((line) => {
			const match = line.match(/^([A-Z_]+)=(.*)$/);
			if (!match) return line;

			const base = DATABASES[match[1]];
			if (!base) return line;

			return `${match[1]}=${match[2].replace(base, dbNameFor(base, slot, shared))}`;
		})
		.join('\n')
		.replace(/\n*$/, '\n');

	const added = [
		'',
		`# Written by tools/worktree.mjs — slot ${slot}.`,
		`PORT=${ports['pokedex-service']}`,
		`CHAMPIONS_PORT=${ports['champions-service']}`,
		'',
	].join('\n');

	writeFileSync(join(dir, '.env'), rewritten + added);
}

/**
 * The slot marker.
 *
 * Untracked, and read by `apps/pokemon-center/proxy.conf.mjs` so the dev-server proxy finds this
 * worktree's backends without the tracked proxy config ever differing between checkouts.
 */
function writeSlotMarker(dir, slot) {
	writeFileSync(join(dir, '.worktree-slot'), `${slot}\n`);
}

/** The preview/launch config, so the tooling in each worktree starts that worktree's ports. */
function writeLaunchConfig(dir, ports) {
	const config = {
		version: '0.0.1',
		configurations: [
			// Shared across every worktree, and its port is pinned by .env and docker-compose alike,
			// so it must never be reassigned.
			{ name: 'postgres', runtimeExecutable: 'docker', runtimeArgs: ['compose', 'up', 'postgres'], port: 5433, autoPort: false },
			...Object.entries(ports).map(([name, port]) => {
				// Only the Angular dev server takes a --port flag; both NestJS services read
				// theirs from PORT / CHAMPIONS_PORT in this worktree's .env.
				const isFrontend = name === 'pokemon-center';

				return {
					name,
					runtimeExecutable: 'pnpm',
					runtimeArgs: isFrontend ? ['nx', 'run', `${name}:serve`, '--port', String(port)] : ['nx', 'run', `${name}:serve`],
					port,
					// The proxy targets the backends by port, so reassigning one silently breaks
					// the app. The frontend's own port is load-bearing for nobody.
					autoPort: isFrontend,
				};
			}),
		],
	};

	mkdirSync(join(dir, '.claude'), { recursive: true });
	writeFileSync(join(dir, '.claude', 'launch.json'), `${JSON.stringify(config, null, '\t')}\n`);
}

function createDatabases(slot, shared) {
	if (shared || slot === 0) return;

	for (const base of Object.values(DATABASES)) {
		const name = dbNameFor(base, slot, shared);
		try {
			run('docker', ['exec', 'pokemon-verse-postgres', 'createdb', '-U', 'postgres', name], { stdio: 'pipe' });
			console.log(`  created database ${name}`);
		} catch {
			// Already there, or Postgres is not running. Neither is worth failing the whole setup
			// over — the message below says what to do.
			console.log(`  database ${name} not created (already exists, or Postgres is not up)`);
		}
	}
}

function create(name, { shared, from }) {
	if (!name) throw new Error('Usage: node tools/worktree.mjs new <name> [--from <branch>] [--shared-db]');

	const slots = readSlots();
	if (slots[name] !== undefined) throw new Error(`Worktree "${name}" already has slot ${slots[name]}.`);

	const slot = allocateSlot(slots);
	const dir = resolve(ROOT, '..', `${basename(ROOT)}-${name}`);
	const ports = portsFor(slot);

	console.log(`\nCreating worktree "${name}" in slot ${slot}`);
	console.log(`  ${dir}`);

	run('git', ['worktree', 'add', '-b', name, dir, from ?? 'HEAD'], { cwd: ROOT });

	writeEnv(dir, slot, shared, ports);
	writeSlotMarker(dir, slot);
	writeLaunchConfig(dir, ports);
	createDatabases(slot, shared);

	slots[name] = slot;
	writeSlots(slots);

	console.log('\nInstalling dependencies (pnpm reuses its store, so this is mostly linking)…');
	run('pnpm', ['install'], { cwd: dir });

	console.log(`\nReady. Ports for this worktree:`);
	for (const [service, port] of Object.entries(ports)) console.log(`  ${service.padEnd(18)} ${port}`);
	if (!shared) console.log(`  databases suffixed _wt${slot} — seed them before serving`);
	console.log(`\n  cd ${dir}\n`);
}

function list() {
	const slots = readSlots();
	const worktrees = capture('git', ['worktree', 'list'], { cwd: ROOT }).split('\n');

	console.log('\nWorktrees:\n');
	for (const line of worktrees) {
		const dir = line.split(' ')[0];
		const name = Object.keys(slots).find((key) => dir.endsWith(`-${key}`));
		const isMain = dir.replace(/\\/g, '/').endsWith(basename(ROOT));

		console.log(`  ${dir}`);

		if (name === undefined && !isMain) {
			// Something else created it — another tool, or `git worktree add` by hand. Saying
			// "slot 0" here would claim it shares the main checkout's ports, which is a guess.
			console.log('    unmanaged — no slot allocated, ports unknown');
			continue;
		}

		const slot = name ? slots[name] : 0;
		const ports = portsFor(slot);
		console.log(`    slot ${slot} · ui ${ports['pokemon-center']} · champions ${ports['champions-service']} · pokedex ${ports['pokedex-service']}`);
	}
	console.log();
}

function remove(name, { keepDb }) {
	if (!name) throw new Error('Usage: node tools/worktree.mjs rm <name> [--keep-db]');

	const slots = readSlots();
	const slot = slots[name];
	const dir = resolve(ROOT, '..', `${basename(ROOT)}-${name}`);

	run('git', ['worktree', 'remove', dir, '--force'], { cwd: ROOT });

	if (slot !== undefined && !keepDb) {
		for (const base of Object.values(DATABASES)) {
			const db = dbNameFor(base, slot, false);
			try {
				run('docker', ['exec', 'pokemon-verse-postgres', 'dropdb', '-U', 'postgres', '--if-exists', db], { stdio: 'pipe' });
				console.log(`  dropped database ${db}`);
			} catch {
				console.log(`  could not drop ${db} (Postgres may not be up)`);
			}
		}
	}

	delete slots[name];
	writeSlots(slots);
	console.log(`\nRemoved "${name}", freeing slot ${slot}.\n`);
}

const [command, name, ...rest] = process.argv.slice(2);
const flags = {
	shared: rest.includes('--shared-db'),
	keepDb: rest.includes('--keep-db'),
	from: rest.includes('--from') ? rest[rest.indexOf('--from') + 1] : undefined,
};

try {
	if (command === 'new') create(name, flags);
	else if (command === 'list') list();
	else if (command === 'rm') remove(name, flags);
	else {
		console.log('Usage:\n  node tools/worktree.mjs new <name> [--from <branch>] [--shared-db]');
		console.log('  node tools/worktree.mjs list');
		console.log('  node tools/worktree.mjs rm <name> [--keep-db]');
		process.exitCode = 1;
	}
} catch (error) {
	console.error(`\n${error.message}\n`);
	process.exitCode = 1;
}

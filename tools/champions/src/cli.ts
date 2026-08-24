import { runDerive } from './pipeline/derive';
import { runFetch } from './pipeline/fetch';
import { runSeed } from './pipeline/seed';

/**
 * Entry point for the Champions data pipeline.
 *
 * A plain CLI rather than Nx executors: local Nx plugins in this workspace are not linked
 * into `node_modules` (the existing `tools/pokedex` plugin has the same gap), so an
 * `@pokemon-center/champions:fetch` reference cannot resolve. `nx:run-commands` targets in
 * project.json wrap these, so the ergonomics are unchanged: `nx run champions:fetch`.
 */

const STAGES = {
	fetch: () => runFetch(),
	derive: () => runDerive(),
	seed: () => runSeed(),
} satisfies Record<string, () => Promise<void>>;

type Stage = keyof typeof STAGES;

async function main(): Promise<void> {
	const stage = process.argv[2] as Stage | undefined;

	if (!stage || !(stage in STAGES)) {
		console.error(`Usage: champions <${Object.keys(STAGES).join('|')}>`);
		process.exitCode = 1;
		return;
	}

	await STAGES[stage]();
}

main().catch((error: unknown) => {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
});

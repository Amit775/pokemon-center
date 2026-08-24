// Mirror PokeAPI official-artwork PNGs into the app's public/ dir so the pokedex
// can run offline.
//
//   node tools/mirror-sprites.mjs              → species 1..1025
//   node tools/mirror-sprites.mjs 1 1025       → an explicit species range
//   node tools/mirror-sprites.mjs --forms      → alternate forms (Megas, regionals): 10001..10400
//
// Champions leans heavily on Mega forms, whose artwork lives at *form* ids in the 10000s
// rather than at their species number — without --forms every Mega falls back to its base
// form's picture, or to a coloured orb.
//
// The output dir is git-ignored; the app falls back to the remote source when a
// sprite is absent, so mirroring is an optional local optimization.
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const args = process.argv.slice(2);
const forms = args.includes('--forms');
const positional = args.filter((arg) => !arg.startsWith('--'));

const from = Number(positional[0] ?? (forms ? 10001 : 1));
const to = Number(positional[1] ?? (forms ? 10400 : 1025));
const dir = 'apps/pokemon-center/public/sprites';
await mkdir(dir, { recursive: true });

let ok = 0;
let skip = 0;
let miss = 0;
for (let id = from; id <= to; id++) {
	const dest = `${dir}/${id}.png`;
	if (existsSync(dest)) {
		skip++;
		continue;
	}
	const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
	try {
		const res = await fetch(url);
		if (!res.ok) {
			miss++;
			continue;
		}
		await writeFile(dest, Buffer.from(await res.arrayBuffer()));
		ok++;
		if (ok % 50 === 0) console.log(`  …${ok} downloaded`);
	} catch {
		miss++;
	}
}
console.log(`mirrored ${ok}, skipped ${skip} (already present), ${miss} without artwork → ${dir}`);

// Mirror PokeAPI official-artwork PNGs into the app's public/ dir so the pokedex
// can run offline. Usage: node tools/mirror-sprites.mjs [from] [to]   (default 1..1025)
// The output dir is git-ignored; the app falls back to the remote source when a
// sprite is absent, so mirroring is an optional local optimization.
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const from = Number(process.argv[2] ?? 1);
const to = Number(process.argv[3] ?? 1025);
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

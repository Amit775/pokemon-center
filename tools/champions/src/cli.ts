import { runFetch } from './pipeline/fetch';
import { runRoster } from './pipeline/roster';

const flags = process.argv.slice(3);

const hasFlag = (flag: string): boolean => flags.includes(flag);

const STAGES = {
	fetch: () => runFetch(),
	roster: () => runRoster({ force: hasFlag('--force') }),
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

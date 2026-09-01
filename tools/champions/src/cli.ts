import { runFetch } from './pipeline/fetch';
import { runLoad } from './pipeline/load';
import { runReset } from './pipeline/reset';
import { runRoster } from './pipeline/roster';

const flags = process.argv.slice(3);

const hasFlag = (flag: string): boolean => flags.includes(flag);

function valueOfFlag(flag: string): string | undefined {
	const inline = flags.find((candidate) => candidate.startsWith(`${flag}=`));
	if (inline) return inline.slice(flag.length + 1);

	const position = flags.indexOf(flag);
	return position === -1 ? undefined : flags[position + 1];
}

const STAGES = {
	fetch: () => runFetch(),
	roster: () => runRoster({ force: hasFlag('--force') }),
	load: () => runLoad({ code: valueOfFlag('--code'), dryRun: hasFlag('--dry-run') }),
	reset: () => runReset({ confirm: hasFlag('--confirm') }),
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

import * as fs from 'fs';
import * as path from 'path';
import { RAW_DIRECTORY, regulationDirectory, regulationMetadataPath, rosterFilePath } from '../lib/champions-paths';
import { serializeRegulationMetadata, type RegulationMetadata } from '../lib/regulation-file';
import { serializeRosterFile, toRosterFileEntry } from '../lib/roster-file';
import { parseRegulationHeader, parseRoster } from '../lib/wikitext';

const START_DATE_TO_BE_FILLED_IN_BY_HAND = '';

function readRawRoster(): string {
	const file = path.join(process.cwd(), RAW_DIRECTORY, 'roster.wikitext');
	if (!fs.existsSync(file)) {
		throw new Error(`Missing ${file}. Run "nx run champions:fetch" first.`);
	}
	return fs.readFileSync(file, 'utf8');
}

function refuseToOverwrite(file: string, force: boolean): void {
	if (fs.existsSync(file) && !force) {
		throw new Error(`${path.relative(process.cwd(), file)} already exists. Review it, or pass --force to regenerate it from the wiki.`);
	}
}

export async function runRoster(options: { force: boolean }): Promise<void> {
	const wikitext = readRawRoster();
	const header = parseRegulationHeader(wikitext);

	if (!header) {
		throw new Error('Could not read the regulation code from the roster page. Write regulation.json by hand and skip this stage.');
	}

	const entries = parseRoster(wikitext).filter((entry) => entry.isAvailable);
	if (entries.length === 0) {
		throw new Error('Parsed zero available roster entries — the upstream markup has probably changed shape.');
	}

	const directory = path.join(process.cwd(), regulationDirectory(header.code));
	const roster = path.join(process.cwd(), rosterFilePath(header.code));
	const metadata = path.join(process.cwd(), regulationMetadataPath(header.code));

	refuseToOverwrite(roster, options.force);
	refuseToOverwrite(metadata, options.force);

	fs.mkdirSync(directory, { recursive: true });
	fs.writeFileSync(roster, serializeRosterFile(entries.map(toRosterFileEntry)), 'utf8');

	const regulation: RegulationMetadata = {
		code: header.code,
		name: `Regulation Set ${header.code}`,
		startsOn: START_DATE_TO_BE_FILLED_IN_BY_HAND,
		endsOn: header.endsOn,
		notes: null,
	};
	fs.writeFileSync(metadata, serializeRegulationMetadata(regulation), 'utf8');

	const countIn = (section: string) => entries.filter((entry) => entry.section === section).length;
	console.log(`Regulation ${header.code}, ends ${header.endsOn}`);
	console.log(`  ${rosterFilePath(header.code)} — ${entries.length} entries (${countIn('species')} species, ${countIn('mega')} Megas, ${countIn('other-form')} alternate forms)`);
	console.log(`  ${regulationMetadataPath(header.code)} — startsOn is blank; fill it in before loading.`);
	console.log('\nReview the diff, fill in startsOn, commit, then run champions:load.');
}

import type { RosterEntry, RosterSection } from './wikitext';

export interface RosterFileEntry {
	pokedexNumber: number;
	species: string;
	form: string;
	formSuffix: string;
	section: RosterSection;
	type1: string;
	type2: string;
	availability: string;
	note: string;
	introducedIn: string;
}

const COLUMNS = ['pokedex_number', 'species', 'form', 'form_suffix', 'section', 'type1', 'type2', 'availability', 'note', 'introduced_in'] as const;

function toFields(entry: RosterFileEntry): string[] {
	return [
		String(entry.pokedexNumber),
		entry.species,
		entry.form,
		entry.formSuffix,
		entry.section,
		entry.type1,
		entry.type2,
		entry.availability,
		entry.note,
		entry.introducedIn,
	];
}

export function serializeRosterFile(entries: readonly RosterFileEntry[]): string {
	return `${[COLUMNS.join('\t'), ...entries.map((entry) => toFields(entry).join('\t'))].join('\n')}\n`;
}

export function parseRosterFile(contents: string): RosterFileEntry[] {
	const lines = contents.split(/\r?\n/).filter((line) => line.trim() !== '');
	const [header, ...rows] = lines;

	if (header === undefined || header.split('\t').join() !== COLUMNS.join()) {
		throw new Error(`Roster file header must be exactly: ${COLUMNS.join('\t')}`);
	}

	return rows.map((row, index) => {
		const fields = row.split('\t');
		if (fields.length !== COLUMNS.length) {
			throw new Error(`Roster file line ${index + 2} has ${fields.length} fields, expected ${COLUMNS.length}`);
		}

		const pokedexNumber = Number(fields[0]);
		if (!Number.isInteger(pokedexNumber)) {
			throw new Error(`Roster file line ${index + 2} has a non-numeric pokedex_number: ${fields[0]}`);
		}

		return {
			pokedexNumber,
			species: fields[1],
			form: fields[2],
			formSuffix: fields[3],
			section: fields[4] as RosterSection,
			type1: fields[5],
			type2: fields[6],
			availability: fields[7],
			note: fields[8],
			introducedIn: fields[9],
		};
	});
}

export function toRosterFileEntry(entry: RosterEntry): RosterFileEntry {
	return {
		pokedexNumber: entry.pokedexNumber,
		species: entry.species,
		form: entry.form ?? '',
		formSuffix: entry.formSuffix ?? '',
		section: entry.section,
		type1: entry.types[0] ?? '',
		type2: entry.types[1] ?? '',
		availability: entry.availability,
		note: entry.note ?? '',
		introducedIn: entry.introducedIn ?? '',
	};
}

export function toRosterEntry(entry: RosterFileEntry): RosterEntry {
	return {
		pokedexNumber: entry.pokedexNumber,
		species: entry.species,
		types: [entry.type1, entry.type2].filter((type) => type !== ''),
		...(entry.form ? { form: entry.form } : {}),
		...(entry.formSuffix ? { formSuffix: entry.formSuffix } : {}),
		section: entry.section,
		isMega: entry.section === 'mega',
		availability: entry.availability,
		isAvailable: true,
		...(entry.introducedIn ? { introducedIn: entry.introducedIn } : {}),
		...(entry.note ? { note: entry.note } : {}),
	};
}

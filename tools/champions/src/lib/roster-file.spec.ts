import { parseRosterFile, serializeRosterFile, toRosterFileEntry, type RosterFileEntry } from './roster-file';
import type { RosterEntry } from './wikitext';

const venusaur: RosterFileEntry = {
	pokedexNumber: 3,
	species: 'Venusaur',
	form: '',
	formSuffix: '',
	section: 'species',
	type1: 'Grass',
	type2: 'Poison',
	availability: 'Yes',
	note: '',
	introducedIn: '1.0.2',
};

const alolanRaichu: RosterFileEntry = {
	pokedexNumber: 26,
	species: 'Raichu',
	form: 'Alolan Form',
	formSuffix: '-Alola',
	section: 'species',
	type1: 'Electric',
	type2: 'Psychic',
	availability: 'Yes',
	note: 'Regular form only',
	introducedIn: '1.0.2',
};

describe('roster file', () => {
	it('round-trips entries through the tab-separated format', () => {
		expect(parseRosterFile(serializeRosterFile([venusaur, alolanRaichu]))).toEqual([venusaur, alolanRaichu]);
	});

	it('writes a header row naming every column', () => {
		const [header] = serializeRosterFile([venusaur]).split('\n');
		expect(header.split('\t')).toEqual(['pokedex_number', 'species', 'form', 'form_suffix', 'section', 'type1', 'type2', 'availability', 'note', 'introduced_in']);
	});

	it('rejects a file whose header does not match the expected columns', () => {
		expect(() => parseRosterFile('pokedex_number\tspecies\n3\tVenusaur\n')).toThrow(/header/i);
	});

	it('ignores blank trailing lines', () => {
		expect(parseRosterFile(`${serializeRosterFile([venusaur])}\n\n`)).toEqual([venusaur]);
	});

	it('fills absent optional fields with empty strings when converting a parsed entry', () => {
		const parsed: RosterEntry = {
			pokedexNumber: 9,
			species: 'Blastoise',
			types: ['Water'],
			section: 'species',
			isMega: false,
			availability: 'Yes',
			isAvailable: true,
		};

		expect(toRosterFileEntry(parsed)).toEqual({
			pokedexNumber: 9,
			species: 'Blastoise',
			form: '',
			formSuffix: '',
			section: 'species',
			type1: 'Water',
			type2: '',
			availability: 'Yes',
			note: '',
			introducedIn: '',
		});
	});
});

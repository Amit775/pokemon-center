import { resolveEntry } from './mainline-projection';
import type { RosterEntry, RosterSection } from './wikitext';

function entryFor(overrides: Partial<RosterEntry> & { pokedexNumber: number; species: string; section: RosterSection }): RosterEntry {
	return {
		types: ['Bug', 'Flying'],
		isMega: overrides.section === 'mega',
		availability: 'Yes',
		isAvailable: true,
		...overrides,
	};
}

const vivillon = new Map([[666, [{ id: 666, identifier: 'vivillon', is_default: 1 }]]]);

const raichu = new Map([
	[
		26,
		[
			{ id: 26, identifier: 'raichu', is_default: 1 },
			{ id: 10100, identifier: 'raichu-alola', is_default: 0 },
		],
	],
]);

describe('resolveEntry', () => {
	it('falls back to the default form when a species-section suffix matches no mainline row', () => {
		const entry = entryFor({ pokedexNumber: 666, species: 'Vivillon', section: 'species', formSuffix: '-High Plains' });
		expect(resolveEntry(entry, vivillon)?.identifier).toBe('vivillon');
	});

	it('still drops an other-form entry whose suffix matches no mainline row', () => {
		const entry = entryFor({ pokedexNumber: 666, species: 'Vivillon', section: 'other-form', form: 'Polar Pattern', formSuffix: '-Polar' });
		expect(resolveEntry(entry, vivillon)).toBeNull();
	});

	it('does not let the fallback override a suffix that does match', () => {
		const entry = entryFor({ pokedexNumber: 26, species: 'Raichu', section: 'species', form: 'Alolan Form', formSuffix: '-Alola' });
		expect(resolveEntry(entry, raichu)?.identifier).toBe('raichu-alola');
	});

	it('resolves a suffixless species entry to the default form', () => {
		const entry = entryFor({ pokedexNumber: 26, species: 'Raichu', section: 'species' });
		expect(resolveEntry(entry, raichu)?.identifier).toBe('raichu');
	});

	it('returns null when the species has no mainline rows at all', () => {
		expect(resolveEntry(entryFor({ pokedexNumber: 9999, species: 'Nonesuch', section: 'species' }), vivillon)).toBeNull();
	});
});

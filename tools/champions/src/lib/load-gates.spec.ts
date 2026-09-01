import { findLoadProblems } from './load-gates';
import { parseRosterCounts } from './wikitext';

const regulation = { code: 'M-B', name: 'Regulation Set M-B', startsOn: '2026-06-17', endsOn: '2026-09-02', notes: null };
const clean = { statedSpeciesCount: 208, parsedSpeciesCount: 208, regulation, unresolvedSpeciesSectionEntries: [] };

describe('parseRosterCounts', () => {
	it('reads the species and Mega counts the page states in prose', () => {
		const prose = 'This is a list of Pokémon that are available in [[Pokémon Champions]]. 208 Pokémon species are available in the game, as well as 75 [[Mega Evolution]]s.';
		expect(parseRosterCounts(prose)).toEqual({ species: 208, megas: 75 });
	});

	it('returns null when the prose has been reworded', () => {
		expect(parseRosterCounts('A list of Pokémon available in Champions.')).toBeNull();
	});
});

describe('findLoadProblems', () => {
	it('passes a clean load', () => {
		expect(findLoadProblems(clean)).toEqual([]);
	});

	it('accepts a species count within tolerance of the stated figure', () => {
		expect(findLoadProblems({ ...clean, parsedSpeciesCount: 200 })).toEqual([]);
	});

	it('refuses a species count far below the stated figure', () => {
		const problems = findLoadProblems({ ...clean, parsedSpeciesCount: 40 });
		expect(problems).toHaveLength(1);
		expect(problems[0].gate).toBe('species-count');
	});

	it('skips the count gate when the prose could not be read', () => {
		expect(findLoadProblems({ ...clean, statedSpeciesCount: null, parsedSpeciesCount: 40 })).toEqual([]);
	});

	it('refuses a regulation window that ends before it starts', () => {
		const problems = findLoadProblems({ ...clean, regulation: { ...regulation, endsOn: '2026-05-01' } });
		expect(problems.map((problem) => problem.gate)).toEqual(['regulation-window']);
	});

	it('refuses an unparseable date', () => {
		const problems = findLoadProblems({ ...clean, regulation: { ...regulation, startsOn: 'soon' } });
		expect(problems.map((problem) => problem.gate)).toEqual(['regulation-window']);
	});

	it('refuses when a species-section entry did not resolve against the mainline dataset', () => {
		const problems = findLoadProblems({ ...clean, unresolvedSpeciesSectionEntries: ['Venusaur'] });
		expect(problems.map((problem) => problem.gate)).toEqual(['unresolved-species']);
	});
});

import type { TypeChart } from '@pokemon-center/champions-engine';
import type { DexEntry } from '../dex/dex-filter';
import { createRng, effectivenessLabel, generateQuestion, ohkoQuestion, speedTierQuestion, typeMatchupQuestion } from './quiz';

const chart: TypeChart = {
	fairy: { dragon: 2, steel: 0.5, dark: 2, flying: 1, ground: 1, water: 1 },
	ice: { dragon: 2, ground: 2, flying: 2, steel: 0.5, water: 0.5 },
	ground: { steel: 2, flying: 0, dragon: 1, water: 1, dark: 1 },
	fighting: { steel: 2, flying: 0.5, dark: 2, dragon: 1, water: 1 },
};

function entry(overrides: Partial<DexEntry> & Pick<DexEntry, 'slug' | 'name' | 'types'>): DexEntry {
	return {
		id: 1,
		nationalDexNo: 1,
		baseStats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80, total: 480 },
		isMega: false,
		hasMega: false,
		megaOfSlug: null,
		abilitySlugs: [],
		abilityNames: [],
		...overrides,
	};
}

const garchomp = entry({
	slug: 'garchomp',
	name: 'Garchomp',
	types: ['dragon', 'ground'],
	baseStats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102, total: 600 },
});

const corviknight = entry({
	slug: 'corviknight',
	name: 'Corviknight',
	types: ['flying', 'steel'],
	baseStats: { hp: 98, attack: 87, defense: 105, specialAttack: 53, specialDefense: 85, speed: 67, total: 495 },
});

const roster = [garchomp, corviknight];

describe('createRng', () => {
	it('is deterministic for a seed', () => {
		const a = createRng(42);
		const b = createRng(42);

		expect([a(), a(), a()]).toEqual([b(), b(), b()]);
	});

	it('produces different streams for different seeds', () => {
		expect(createRng(1)()).not.toBe(createRng(999)());
	});
});

describe('effectivenessLabel', () => {
	it("uses Champions' own wording for the extremes", () => {
		// The game names 4x and 1/4x rather than lumping them with 2x and 1/2x, so the drill
		// teaches the vocabulary the player will actually read on screen.
		expect(effectivenessLabel(4)).toBe('Extremely effective (4×)');
		expect(effectivenessLabel(0.25)).toBe('Mostly ineffective (¼×)');
		expect(effectivenessLabel(0)).toBe('No effect');
	});
});

describe('typeMatchupQuestion', () => {
	it('offers exactly one correct answer', () => {
		for (let seed = 1; seed < 40; seed++) {
			const question = typeMatchupQuestion(roster, chart, seed);
			if (!question) continue;

			expect(question.choices.filter((choice) => choice.correct)).toHaveLength(1);
		}
	});

	it('never repeats an option', () => {
		for (let seed = 1; seed < 40; seed++) {
			const question = typeMatchupQuestion(roster, chart, seed);
			if (!question) continue;

			const labels = question.choices.map((choice) => choice.label);
			expect(new Set(labels).size).toBe(labels.length);
		}
	});

	it('is reproducible from its seed', () => {
		expect(typeMatchupQuestion(roster, chart, 7)).toEqual(typeMatchupQuestion(roster, chart, 7));
	});

	it('explains the answer rather than only stating it', () => {
		expect(typeMatchupQuestion(roster, chart, 3)?.explanation).toMatch(/×/);
	});

	it('gets the article right for vowel-initial types', () => {
		// Ice and Electric are the two that read wrong with a blanket "a".
		for (let seed = 1; seed < 60; seed++) {
			const prompt = typeMatchupQuestion(roster, chart, seed)?.prompt ?? '';
			expect(prompt).not.toMatch(/\ba (Ice|Electric)\b/);
		}
	});
});

describe('speedTierQuestion', () => {
	it('picks the genuinely faster Pokémon', () => {
		// Garchomp's base 102 beats Corviknight's 67 at equal investment.
		const question = speedTierQuestion(roster, 5);

		expect(question?.choices.find((choice) => choice.correct)?.label).toBe('Garchomp');
	});

	it('never offers the same Pokémon twice', () => {
		for (let seed = 1; seed < 30; seed++) {
			const question = speedTierQuestion(roster, seed);
			if (!question) continue;

			expect(question.choices[0].label).not.toBe(question.choices[1].label);
		}
	});

	it('returns null rather than a tie when it cannot find two different speeds', () => {
		// A question with two correct answers teaches nothing, so none is produced.
		const twins = [entry({ slug: 'a', name: 'A', types: ['water'] }), entry({ slug: 'b', name: 'B', types: ['water'] })];

		expect(speedTierQuestion(twins, 1)).toBeNull();
	});

	it('quotes both speeds in the explanation', () => {
		expect(speedTierQuestion(roster, 5)?.explanation).toMatch(/\d+ Speed/);
	});
});

describe('ohkoQuestion', () => {
	it('offers exactly one correct answer', () => {
		for (let seed = 1; seed < 40; seed++) {
			const question = ohkoQuestion(roster, chart, seed);
			if (!question) continue;

			expect(question.choices.filter((choice) => choice.correct)).toHaveLength(1);
		}
	});

	it('states the damage against the HP so the answer is checkable', () => {
		for (let seed = 1; seed < 20; seed++) {
			const question = ohkoQuestion(roster, chart, seed);
			if (!question) continue;

			expect(question.explanation).toMatch(/\d+ damage against \d+ HP/);
			break;
		}
	});
});

describe('generateQuestion', () => {
	it('dispatches to each drill', () => {
		expect(generateQuestion('type-matchup', roster, chart, 1)?.kind).toBe('type-matchup');
		expect(generateQuestion('speed-tier', roster, chart, 1)?.kind).toBe('speed-tier');
		expect(generateQuestion('ohko', roster, chart, 1)?.kind).toBe('ohko');
	});

	it('returns null on an empty roster rather than inventing a question', () => {
		expect(generateQuestion('type-matchup', [], chart, 1)).toBeNull();
		expect(generateQuestion('speed-tier', [], chart, 1)).toBeNull();
		expect(generateQuestion('ohko', [], chart, 1)).toBeNull();
	});
});

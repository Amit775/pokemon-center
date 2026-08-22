import { CounterScore, compareCounters, counterScore, isAnswer } from './counters';
import type { TypeChart } from './types';

/**
 * Only the rows these cases need; `typeEffectiveness` treats a missing pairing as neutral,
 * which keeps the fixture readable rather than reproducing all 324.
 */
const chart: TypeChart = {
	dragon: { dragon: 2, steel: 0.5, fairy: 0, ground: 1, flying: 1, water: 1, fire: 1, ice: 1, dark: 1 },
	ground: { steel: 2, fire: 2, electric: 2, flying: 0, dragon: 1, fairy: 1, water: 1, ice: 1, dark: 1 },
	steel: { fairy: 2, ice: 2, steel: 0.5, fire: 0.5, water: 0.5, dragon: 1, ground: 1, flying: 1 },
	flying: { grass: 2, fighting: 2, steel: 0.5, electric: 0.5, dragon: 1, ground: 1, fire: 1, ice: 1, dark: 1, flying: 1 },
	fairy: { dragon: 2, dark: 2, steel: 0.5, fire: 0.5, ground: 1, flying: 1, water: 1, ice: 1 },
	ice: { dragon: 2, ground: 2, flying: 2, grass: 2, steel: 0.5, fire: 0.5, water: 0.5, ice: 0.5, fairy: 1, dark: 1 },
	water: { fire: 2, ground: 2, water: 0.5, grass: 0.5, dragon: 0.5, steel: 1, flying: 1, fairy: 1, ice: 1, dark: 1 },
	fire: { steel: 2, ice: 2, grass: 2, water: 0.5, dragon: 0.5, fire: 0.5, ground: 1, flying: 1, fairy: 1, dark: 1 },
};

const garchomp = { types: ['dragon', 'ground'], baseSpeed: 102 };
const corviknight = { types: ['flying', 'steel'], baseSpeed: 67 };
const weavile = { types: ['ice', 'dark'], baseSpeed: 125 };
const azumarill = { types: ['water', 'fairy'], baseSpeed: 50 };
const dragonite = { types: ['dragon', 'flying'], baseSpeed: 80 };
const charizard = { types: ['fire', 'flying'], baseSpeed: 100 };
const magearna = { types: ['steel', 'fairy'], baseSpeed: 60 };

describe('counterScore', () => {
	it('calls something that resists every one of their STAB types and hits back a counter', () => {
		// Steel/Fairy takes 0.5x from Flying and nothing at all from Dragon, and its Fairy STAB
		// melts Dragon in return. Both halves satisfied.
		const score = counterScore(dragonite, magearna, chart);

		expect(score.offence).toBe(2);
		expect(score.exposure).toBe(0.5);
		expect(score.verdict).toBe('counter');
	});

	it('demands resistance to EVERY one of their STAB types, not just one', () => {
		// Azumarill is immune to Garchomp's Dragon but eats a neutral Ground move, so it is a
		// check rather than a counter. Half a wall is not a wall — the same rule the matchup
		// filter is built on.
		const score = counterScore(garchomp, azumarill, chart);

		expect(score.offence).toBe(2);
		expect(score.exposure).toBe(1);
		expect(score.verdict).toBe('check');
	});

	it('separates a wall from a counter — surviving forever and never winning is not an answer', () => {
		const score = counterScore(garchomp, corviknight, chart);

		// Ground does nothing, Dragon is resisted: the best Garchomp manages is 0.5x.
		expect(score.exposure).toBe(0.5);
		expect(score.offence).toBe(1);
		expect(score.verdict).toBe('wall');
	});

	it('calls a mutual super-effective matchup a trade, not a counter', () => {
		// A Dragon mirror: each side's STAB melts the other, so whoever moves first wins.
		const score = counterScore(garchomp, dragonite, chart);

		expect(score.offence).toBe(2);
		expect(score.exposure).toBe(2);
		expect(score.verdict).toBe('trade');
		expect(score.outspeeds).toBe(false);
	});

	it('reports losing when they hit super-effectively and you do not', () => {
		// Azumarill's Water melts Charizard; Charizard's Fire is resisted and its Flying neutral.
		const score = counterScore(azumarill, charizard, chart);

		expect(score.verdict).toBe('loses');
	});

	it('is not symmetric — reversing the pair reverses the reading', () => {
		expect(counterScore(garchomp, azumarill, chart).verdict).toBe('check');
		expect(counterScore(azumarill, garchomp, chart).verdict).toBe('loses');
	});

	it('measures exposure from the target’s best option, not its worst', () => {
		// Garchomp into Azumarill: Dragon is an immunity, Ground is neutral. What matters is
		// the move they would actually click, so exposure is 1 rather than 0.
		expect(counterScore(garchomp, azumarill, chart).exposure).toBe(1);
	});

	it('counts a 4x hit as such rather than capping it', () => {
		expect(counterScore(garchomp, weavile, chart).offence).toBe(4);
	});
});

describe('compareCounters', () => {
	const score = (overrides: Partial<CounterScore>): CounterScore => ({
		verdict: 'even',
		offence: 1,
		exposure: 1,
		outspeeds: false,
		...overrides,
	});

	it('ranks by band before anything else', () => {
		const ranked = [score({ verdict: 'wall' }), score({ verdict: 'counter' }), score({ verdict: 'check' })].sort(compareCounters);

		expect(ranked.map((s) => s.verdict)).toEqual(['counter', 'check', 'wall']);
	});

	it('prefers hitting harder over taking less within a band', () => {
		const harder = score({ verdict: 'counter', offence: 4, exposure: 0.5 });
		const safer = score({ verdict: 'counter', offence: 2, exposure: 0 });

		expect([safer, harder].sort(compareCounters)[0]).toBe(harder);
	});

	it('uses speed only to separate otherwise identical answers', () => {
		const fast = score({ verdict: 'check', offence: 2, outspeeds: true });
		const slow = score({ verdict: 'check', offence: 2, outspeeds: false });

		expect([slow, fast].sort(compareCounters)[0]).toBe(fast);
	});
});

describe('isAnswer', () => {
	it('accepts the three bands worth showing and rejects the rest', () => {
		expect(isAnswer(counterScore(dragonite, magearna, chart))).toBe(true); // counter
		expect(isAnswer(counterScore(garchomp, azumarill, chart))).toBe(true); // check
		expect(isAnswer(counterScore(garchomp, corviknight, chart))).toBe(true); // wall
		expect(isAnswer(counterScore(garchomp, dragonite, chart))).toBe(false); // trade
		expect(isAnswer(counterScore(azumarill, charizard, chart))).toBe(false); // loses
	});
});

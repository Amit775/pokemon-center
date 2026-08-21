import { computeStats, statAt50, validateSpread, applyStage, natureMultiplier, assumeMaxInvestment } from './stats';
import { natures, species, spread } from './testing/fixtures';
import { SP_PER_STAT_CAP, SP_TOTAL_BUDGET } from './types';

describe('statAt50', () => {
	it('computes an uninvested stat with the implicit perfect IV', () => {
		// Garchomp base Speed 102: floor((2·102 + 31) · 50 / 100) + 5 = 117 + 5 = 122.
		expect(statAt50(102, 'speed')).toBe(122);
	});

	it('adds one point of stat per point of SP', () => {
		// This is the property that defines the Champions system, so it is asserted directly.
		expect(statAt50(102, 'speed', 32)).toBe(122 + 32);
		expect(statAt50(102, 'speed', 1)).toBe(123);
	});

	it('computes HP with the level term rather than the +5', () => {
		// Garchomp base HP 108: floor((216 + 31) · 50 / 100) + 50 + 10 = 123 + 60 = 183.
		expect(statAt50(108, 'hp')).toBe(183);
		expect(statAt50(108, 'hp', 4)).toBe(187);
	});

	it('leaves HP untouched by nature', () => {
		expect(statAt50(108, 'hp', 0, natures.jolly)).toBe(statAt50(108, 'hp', 0, natures.serious));
	});

	it('applies nature after the SP is added', () => {
		// Jolly max-Speed Garchomp: floor((117 + 5 + 32) · 1.1) = floor(169.4) = 169.
		expect(statAt50(102, 'speed', 32, natures.jolly)).toBe(169);
	});

	it('conserves mainline power levels, which is why the formula is credible', () => {
		// Mainline 252 EVs / 31 IV / Jolly Garchomp at level 50 is the well-known 169.
		// Champions reaches the same number with 32 SP — the budget was re-expressed, not cut.
		expect(statAt50(102, 'speed', SP_PER_STAT_CAP, natures.jolly)).toBe(169);
	});

	it('lowers a hindered stat by 10%', () => {
		expect(statAt50(102, 'speed', 0, { name: 'Brave', raises: 'attack', lowers: 'speed' })).toBe(Math.floor(122 * 0.9));
	});
});

describe('natureMultiplier', () => {
	it('is inert when a nature raises and lowers the same stat', () => {
		expect(natureMultiplier({ name: 'Hardy', raises: 'attack', lowers: 'attack' }, 'attack')).toBe(1);
	});

	it('never touches HP', () => {
		expect(natureMultiplier(natures.jolly, 'hp')).toBe(1);
	});
});

describe('computeStats', () => {
	it('produces a full spread', () => {
		const stats = computeStats(species.garchomp.baseStats, spread({ attack: 32, speed: 32, hp: 2 }), natures.jolly);

		// Attack: floor((2·130 + 31) · 50 / 100) = 145, + 5 + 32 SP = 182 (Jolly is neutral here).
		expect(stats).toMatchObject({ hp: 185, attack: 182, speed: 169 });
	});
});

describe('applyStage', () => {
	it('is the identity at stage 0', () => {
		expect(applyStage(169, 0)).toBe(169);
	});

	it('uses the offensive ladder in both directions', () => {
		expect(applyStage(100, 1)).toBe(150);
		expect(applyStage(100, 2)).toBe(200);
		expect(applyStage(100, -1)).toBe(66);
		expect(applyStage(100, 6)).toBe(400);
		expect(applyStage(100, -6)).toBe(25);
	});
});

describe('validateSpread', () => {
	it('accepts a legal spread and reports the leftovers', () => {
		const result = validateSpread(spread({ attack: 32, speed: 32, hp: 2 }));

		expect(result).toMatchObject({ isLegal: true, total: SP_TOTAL_BUDGET, remaining: 0 });
	});

	it('rejects a spread over the total budget', () => {
		expect(validateSpread(spread({ attack: 32, speed: 32, hp: 32 })).isLegal).toBe(false);
	});

	it('rejects a single stat over the per-stat cap', () => {
		const result = validateSpread(spread({ attack: 33 }));

		expect(result.isLegal).toBe(false);
		expect(result.overCap).toEqual(['attack']);
	});

	it('reports unspent points', () => {
		expect(validateSpread(spread({ speed: 32 })).remaining).toBe(SP_TOTAL_BUDGET - 32);
	});
});

describe('assumeMaxInvestment', () => {
	it('assumes the worst about an unknown opponent rather than the best', () => {
		// An advisor that assumes zero investment flatters you into losing.
		const assumed = assumeMaxInvestment('attack', 'speed');

		expect(assumed.attack).toBe(SP_PER_STAT_CAP);
		expect(assumed.speed).toBe(SP_PER_STAT_CAP);
		expect(validateSpread(assumed).isLegal).toBe(true);
	});
});

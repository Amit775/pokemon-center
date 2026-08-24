import { effectiveSpeed, speedRange, speedTiers, turnOrder } from './speed';
import { build, moves, natures, species, spread } from './testing/fixtures';
import { CLEAR_FIELD } from './types';

const jollyChomp = build({ species: species.garchomp, nature: natures.jolly, statPoints: spread({ attack: 32, speed: 32, hp: 2 }) });
const timidPult = build({ species: species.dragapult, nature: natures.timid, statPoints: spread({ specialAttack: 32, speed: 32, hp: 2 }) });
const slowCorv = build({ species: species.corviknight, statPoints: spread({ hp: 32, defense: 32 }) });

describe('effectiveSpeed', () => {
	it('returns the plain stat with no modifiers', () => {
		expect(effectiveSpeed(jollyChomp)).toBe(169);
	});

	it('applies a Choice Scarf', () => {
		expect(effectiveSpeed({ ...jollyChomp, item: 'choice-scarf' })).toBe(Math.floor(169 * 1.5));
	});

	it('applies stat stages', () => {
		expect(effectiveSpeed(jollyChomp, { boosts: { speed: 1 } })).toBe(Math.floor(169 * 1.5));
		expect(effectiveSpeed(jollyChomp, { boosts: { speed: -1 } })).toBe(Math.floor(169 * (2 / 3)));
	});

	it('doubles under Tailwind', () => {
		expect(effectiveSpeed(jollyChomp, { field: { ...CLEAR_FIELD, tailwind: true } })).toBe(338);
	});

	it('halves under paralysis', () => {
		expect(effectiveSpeed(jollyChomp, { isParalysed: true })).toBe(84);
	});

	it('lets Quick Feet ignore the paralysis drop and gain a boost instead', () => {
		const quickFeet = { ...jollyChomp, ability: 'quick-feet' };

		expect(effectiveSpeed(quickFeet, { isParalysed: true })).toBe(Math.floor(169 * 1.5));
	});

	it('doubles a weather sweeper only while its weather is up', () => {
		const swiftSwim = { ...jollyChomp, ability: 'swift-swim' };

		expect(effectiveSpeed(swiftSwim, { field: { ...CLEAR_FIELD, weather: 'rain' } })).toBe(338);
		expect(effectiveSpeed(swiftSwim, { field: { ...CLEAR_FIELD, weather: 'sun' } })).toBe(169);
	});

	it('stacks a Scarf with Tailwind in the games’ order', () => {
		// Item first, then Tailwind: floor(169 · 1.5) = 253, then ×2 = 506.
		expect(effectiveSpeed({ ...jollyChomp, item: 'choice-scarf' }, { field: { ...CLEAR_FIELD, tailwind: true } })).toBe(506);
	});
});

describe('turnOrder', () => {
	it('gives the faster side the turn', () => {
		expect(turnOrder({ build: timidPult }, { build: jollyChomp }).order).toBe('you-first');
	});

	it('lets priority beat raw Speed', () => {
		const result = turnOrder({ build: slowCorv, movePriority: moves.firstImpression.priority }, { build: timidPult });

		expect(result).toMatchObject({ order: 'you-first', decidedBy: 'priority' });
	});

	it('reports a genuine speed tie rather than picking a winner', () => {
		expect(turnOrder({ build: jollyChomp }, { build: { ...jollyChomp } }).order).toBe('speed-tie');
	});

	it('inverts the Speed comparison under Trick Room', () => {
		const result = turnOrder({ build: slowCorv }, { build: timidPult }, { ...CLEAR_FIELD, trickRoom: true });

		expect(result).toMatchObject({ order: 'you-first', decidedBy: 'trick-room' });
	});

	it('keeps priority above Trick Room', () => {
		// Trick Room reorders within a bracket; it does not reverse the brackets themselves,
		// so Fake Out and First Impression still go first.
		const result = turnOrder(
			{ build: timidPult, movePriority: 2 },
			{ build: slowCorv, movePriority: 0 },
			{ ...CLEAR_FIELD, trickRoom: true },
		);

		expect(result).toMatchObject({ order: 'you-first', decidedBy: 'priority' });
	});
});

describe('speedTiers', () => {
	const tiers = speedTiers([jollyChomp], [timidPult, slowCorv]);

	it('merges both teams into one descending list', () => {
		expect(tiers.map((t) => t.build.species.name)).toEqual(['Dragapult', 'Garchomp', 'Corviknight']);
	});

	it('marks which entries are yours', () => {
		expect(tiers.find((t) => t.build.species.name === 'Garchomp')?.isYours).toBe(true);
		expect(tiers.find((t) => t.build.species.name === 'Dragapult')?.isYours).toBe(false);
	});

	it('lists the modifiers behind a speed', () => {
		const scarfed = speedTiers([{ ...jollyChomp, item: 'choice-scarf' }], []);

		expect(scarfed[0].modifiers).toContain('choice scarf');
	});
});

describe('speedRange', () => {
	it('spans from hindered-uninvested to Scarfed maximum', () => {
		const range = speedRange(jollyChomp);

		// The band an unknown opponent could occupy — a single number here would be a lie.
		expect(range.min).toBeLessThan(range.max);
		expect(range.max).toBe(169);
		expect(range.scarfed).toBe(253);
	});
});

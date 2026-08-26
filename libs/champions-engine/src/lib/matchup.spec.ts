import { coverageGaps, defensiveProfile, matchup, teamWeaknesses, threatMatrix, typeEffectiveness } from './matchup';
import { build, moves, natures, species, spread, typeChart } from './testing/fixtures';

const chomp = build({
	species: species.garchomp,
	nature: natures.jolly,
	statPoints: spread({ attack: 32, speed: 32, hp: 2 }),
	moves: [moves.earthquake, moves.dragonClaw],
});

const pult = build({
	species: species.dragapult,
	nature: natures.timid,
	statPoints: spread({ specialAttack: 32, speed: 32, hp: 2 }),
	moves: [moves.dragonClaw],
});

const corv = build({
	species: species.corviknight,
	statPoints: spread({ hp: 32, defense: 32, specialDefense: 2 }),
	moves: [moves.bodyPress, moves.roost],
});

describe('typeEffectiveness', () => {
	it('multiplies across both of a dual type', () => {
		expect(typeEffectiveness('ground', ['flying', 'steel'], typeChart)).toBe(0);
		expect(typeEffectiveness('fighting', ['flying', 'steel'], typeChart)).toBe(1);
	});

	it('treats an unknown pairing as neutral rather than throwing', () => {
		expect(typeEffectiveness('ground', ['unlisted-type'], typeChart)).toBe(1);
	});
});

describe('defensiveProfile', () => {
	const profile = defensiveProfile(['dragon', 'ghost'], typeChart);

	it('lists weaknesses sharpest first', () => {
		const multipliers = profile.weaknesses.map((weakness) => weakness.multiplier);

		expect(multipliers).toEqual([...multipliers].sort((first, second) => second - first));
	});

	it('separates immunities from resistances', () => {
		const flyingProfile = defensiveProfile(['flying', 'steel'], typeChart);

		expect(flyingProfile.immunities).toContain('ground');
		expect(flyingProfile.resistances.map((resistance) => resistance.type)).not.toContain('ground');
	});
});

describe('teamWeaknesses', () => {
	it('ranks attacking types by how much of the team they hit', () => {
		const profile = teamWeaknesses([chomp, pult], typeChart);
		const ice = profile.pressure.find((pressureEntry) => pressureEntry.type === 'ice');

		// Both are Dragons, so Ice hits the pair — the answer to "what do I click?".
		expect(ice?.hits).toBe(2);
		expect(profile.pressure[0].hits).toBeGreaterThanOrEqual(profile.pressure[1]?.hits ?? 0);
	});

	it('reports types the team collectively handles', () => {
		const profile = teamWeaknesses([corv], typeChart);

		expect(profile.covered).toContain('ground');
	});
});

describe('coverageGaps', () => {
	it('finds defending types nothing on the team can hit neutrally', () => {
		// Corviknight's only attack is Fighting, which cannot touch a Ghost.
		expect(coverageGaps([corv], typeChart, ['ghost', 'steel'])).toContain('ghost');
	});

	it('reports no gap when a team covers everything given', () => {
		expect(coverageGaps([chomp], typeChart, ['steel'])).toEqual([]);
	});
});

describe('matchup', () => {
	it('is speed-aware, not just damage-aware', () => {
		const result = matchup(pult, chomp, typeChart);

		expect(result.youOutspeed).toBe(true);
		expect(result.yourSpeed).toBeGreaterThan(result.theirSpeed);
	});

	it('calls a stall when neither side can damage the other', () => {
		const passive = build({ species: species.corviknight, moves: [moves.roost] });
		const result = matchup(passive, { ...passive }, typeChart);

		expect(result.verdict).toBe('stall');
		expect(result.reason).toMatch(/Neither side/);
	});

	it('explains its verdict in one line', () => {
		expect(matchup(chomp, pult, typeChart).reason.length).toBeGreaterThan(0);
	});

	it('names the best move each side has', () => {
		const result = matchup(chomp, pult, typeChart);

		expect(result.yourBest?.moveName).toBe('Dragon Claw');
	});

	it('calls a mirror match close rather than a loss', () => {
		// A speed tie must penalise neither side; treating "not faster" as "slower" made every
		// identical matchup report as a loss.
		const mirror = build({ species: species.dragapult, moves: [moves.dragonClaw] });

		expect(matchup(mirror, { ...mirror }, typeChart).verdict).toBe('close');
	});

	it('lets moving first decide an otherwise even matchup', () => {
		// Same species, same moves, one with a Choice Scarf. If both need the same number of
		// hits, the faster side wins outright — reporting that as "close" is not advice.
		const slow = build({ species: species.dragapult, moves: [moves.dragonClaw] });
		const fast = { ...slow, item: 'choice-scarf' };

		expect(matchup(fast, slow, typeChart).verdict).toBe('you-win');
		expect(matchup(slow, fast, typeChart).verdict).toBe('they-win');
	});
});

describe('threatMatrix', () => {
	const assessment = threatMatrix([chomp, corv], [pult, chomp], typeChart);

	it('builds a cell for every pairing', () => {
		expect(assessment.grid).toHaveLength(2);
		expect(assessment.grid[0]).toHaveLength(2);
	});

	it('ranks their team by how much of yours it beats', () => {
		expect(assessment.mustRemove).toHaveLength(2);
		expect(assessment.mustRemove[0].beats).toBeGreaterThanOrEqual(assessment.mustRemove[1].beats);
	});

	it('ranks your team by how much of theirs it beats', () => {
		expect(assessment.winConditions).toHaveLength(2);
		expect(assessment.winConditions[0].beats).toBeGreaterThanOrEqual(assessment.winConditions[1].beats);
	});
});

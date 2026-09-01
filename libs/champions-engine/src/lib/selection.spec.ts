import { recommendSelection } from './selection';
import { OpponentIntel } from './intel';
import { ChampionsSpecies } from './types';
import { build, moves, species, typeChart } from './testing/fixtures';

function intelFor(theBuild: ReturnType<typeof build>, megaPreview: OpponentIntel['megaPreview'] = null): OpponentIntel {
	return {
		build: theBuild,
		typeProfile: { weaknesses: [], resistances: [], immunities: [] },
		predictedMoves: theBuild.moves.map((move) => ({ value: move, source: 'inferred' as const })),
		predictedAbility: null,
		predictedItem: null,
		megaPreview,
	};
}

describe('recommendSelection', () => {
	it('ranks a candidate that can damage a moveless revealed opponent above one that cannot', () => {
		// The opponent has no moves, so it can never win a matchup (its attack is always null,
		// giving it infinite KO turns) — this isolates typeMatchupRule from damage-roll arithmetic:
		// any candidate with one working, non-immune attack is a guaranteed 'you-win'.
		const attacker = build({ species: species.corviknight, moves: [moves.earthquake] });
		const passive = build({ species: species.azumarill });
		const opponent = intelFor(build({ species: species.garchomp }));

		const recommendation = recommendSelection([attacker, passive], [opponent], typeChart, 'singles', 2);

		expect(recommendation.bring[0].build.species.slug).toBe('corviknight');
		expect(recommendation.bring[0].findings).toEqual(
			expect.arrayContaining([expect.objectContaining({ rule: 'type-matchup', impact: 'positive' })]),
		);
	});

	it('credits a candidate that sets hazards and flags one that clears them when the opponent sets hazards', () => {
		const setter = build({ species: species.corviknight, moves: [moves.stealthRock] });
		const spinner = build({ species: species.azumarill, moves: [moves.rapidSpin] });
		const opponent = intelFor(build({ species: species.garchomp, moves: [moves.stealthRock] }));

		const recommendation = recommendSelection([setter, spinner], [opponent], typeChart, 'singles', 2);

		const setterFindings = recommendation.bring.find((entry) => entry.build.species.slug === 'corviknight')!.findings;
		const spinnerFindings = recommendation.bring.find((entry) => entry.build.species.slug === 'azumarill')!.findings;

		expect(setterFindings).toEqual(expect.arrayContaining([expect.objectContaining({ rule: 'hazard-control', impact: 'positive' })]));
		expect(spinnerFindings).toEqual(expect.arrayContaining([expect.objectContaining({ rule: 'hazard-control', impact: 'positive' })]));
	});

	it('flags a Mega threat the candidate has no resistance to', () => {
		const candidate = build({ species: species.azumarill });
		const opponent = intelFor(build({ species: species.garchomp }), {
			types: ['ghost', 'flying'],
			typeChanged: true,
			baseStats: species.garchomp.baseStats,
			ability: null,
		});

		const recommendation = recommendSelection([candidate], [opponent], typeChart, 'singles', 1);

		expect(recommendation.bring[0].findings).toEqual(
			expect.arrayContaining([expect.objectContaining({ rule: 'mega-threat', impact: 'negative' })]),
		);
	});

	it('limits bring to bringCount and leads to one entry in singles', () => {
		const team = [
			build({ species: species.garchomp }),
			build({ species: species.dragapult }),
			build({ species: species.corviknight }),
			build({ species: species.azumarill }),
		];
		const opponent = intelFor(build({ species: species.garchomp }));

		const recommendation = recommendSelection(team, [opponent], typeChart, 'singles', 3);

		expect(recommendation.bring).toHaveLength(3);
		expect(recommendation.leads).toHaveLength(1);
		expect(recommendation.leads[0]).toBe(recommendation.bring[0]);
	});

	it('ranks the real type-matchup winner above a candidate whose only advantage is a raw defensive-stat gap', () => {
		// A custom species with an extreme defense/specialDefense split and no moves at all: it can
		// never win (or even contest) a matchup, but before Fix 1's bucketing, its
		// physical-special-answer finding's magnitude was the raw stat-point gap (well over 100
		// here), which would have drowned out every other rule's small-integer magnitude and put
		// it first regardless of what anyone else brought to the fight.
		const wall: ChampionsSpecies = {
			id: 9001,
			slug: 'test-wall',
			name: 'TestWall',
			types: ['normal'],
			baseStats: { hp: 100, attack: 50, defense: 200, specialAttack: 50, specialDefense: 50, speed: 50 },
			isMega: false,
			abilities: ['sturdy'],
		};
		const passiveWall = build({ species: wall });

		// Corviknight actually wins the matchup (immune to Earthquake via its Flying typing, then
		// chips back with its own) and also sets hazards — real, load-bearing advantages a correct
		// ranking should reward over a raw defensive-stat gap that never translates into a damage roll.
		const challenger = build({ species: species.corviknight, moves: [moves.earthquake, moves.stealthRock] });

		const opponent = intelFor(build({ species: species.garchomp, moves: [moves.earthquake] }));

		const recommendation = recommendSelection([passiveWall, challenger], [opponent], typeChart, 'singles', 2);

		expect(recommendation.bring[0].build.species.slug).toBe('corviknight');
		expect(recommendation.bring[0].findings).toEqual(
			expect.arrayContaining([expect.objectContaining({ rule: 'type-matchup', impact: 'positive' })]),
		);
	});

	it('picks two leads in doubles', () => {
		const team = [build({ species: species.garchomp }), build({ species: species.dragapult }), build({ species: species.corviknight }), build({ species: species.azumarill })];
		const opponent = intelFor(build({ species: species.garchomp }));

		const recommendation = recommendSelection(team, [opponent], typeChart, 'doubles', 4);

		expect(recommendation.leads).toHaveLength(2);
	});
});

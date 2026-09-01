import { analyzeTeamSynergy, recommendSynergyCandidates } from './synergy';
import { species, typeChart } from './testing/fixtures';

describe('Synergy analysis', () => {
	it('explains a shared weakness when teammates do not compensate for it', () => {
		const analysis = analyzeTeamSynergy([species.garchomp, species.dragapult], typeChart, 'singles');

		expect(analysis.negativeFindings).toEqual(
			expect.arrayContaining([expect.objectContaining({ rule: 'shared-weaknesses', types: ['ice'], involvedPokemon: ['Garchomp', 'Dragapult'] })]),
		);
	});

	it('records a defensive answer rather than hiding it behind a score', () => {
		const analysis = analyzeTeamSynergy([species.garchomp, species.azumarill], typeChart, 'singles');

		expect(analysis.positiveFindings).toEqual(
			expect.arrayContaining([expect.objectContaining({ rule: 'defensive-answers', types: ['ice'] })]),
		);
	});

	it('ranks a candidate from its analysis improvements and exposes regressions', () => {
		const recommendations = recommendSynergyCandidates([species.garchomp, species.dragapult], [species.corviknight, species.azumarill], typeChart, 'doubles');

		expect(recommendations[0].candidate.slug).toBe('azumarill');
		expect(recommendations[0].improvements).toEqual(expect.arrayContaining([expect.objectContaining({ types: ['ice'] })]));
	});
});

import { defensiveProfile } from './matchup';
import { ChampionsSpecies, TypeChart, TypeSlug } from './types';

/** Competitive context selects an explicit set of evidence rules. */
export type SynergyFormat = 'singles' | 'doubles';

export type SynergyImpact = 'positive' | 'negative' | 'neutral';

/**
 * A traceable observation produced by exactly one analysis rule.
 *
 * Magnitude is a count of observed facts, not a hidden strategic score. Consumers may present
 * or aggregate it, but must retain this evidence as the explanation for any evaluation.
 */
export interface SynergyFinding {
	rule: 'shared-weaknesses' | 'defensive-answers' | 'stab-diversity' | 'partner-type-diversity';
	category: 'defense' | 'coverage';
	impact: SynergyImpact;
	magnitude: number;
	explanation: string;
	involvedPokemon: string[];
	types: TypeSlug[];
}

export interface TeamSynergyAnalysis {
	format: SynergyFormat;
	findings: SynergyFinding[];
	positiveFindings: SynergyFinding[];
	negativeFindings: SynergyFinding[];
}

export interface SynergyCandidate<TCandidate extends ChampionsSpecies = ChampionsSpecies> {
	candidate: TCandidate;
	analysis: TeamSynergyAnalysis;
	improvements: SynergyFinding[];
	regressions: SynergyFinding[];
}

type SynergyRule = (team: readonly ChampionsSpecies[], chart: TypeChart) => SynergyFinding[];

const namesFor = (team: readonly ChampionsSpecies[], indexes: readonly number[]) => indexes.map((index) => team[index].name);

/**
 * A type is a shared exposure only when at least two members are weak to it and fewer members
 * resist or are immune to it. This makes the warning about an actual team-level gap, not merely
 * a list of individual weaknesses.
 */
const sharedWeaknessRule: SynergyRule = (team, chart) => {
	const findings: SynergyFinding[] = [];

	for (const attackingType of Object.keys(chart)) {
		const weakIndexes: number[] = [];
		const answerIndexes: number[] = [];

		team.forEach((member, index) => {
			const profile = defensiveProfile(member.types, chart);
			if (profile.weaknesses.some((weakness) => weakness.type === attackingType)) weakIndexes.push(index);
			if (
				profile.immunities.includes(attackingType) ||
				profile.resistances.some((resistance) => resistance.type === attackingType)
			)
				answerIndexes.push(index);
		});

		if (weakIndexes.length >= 2 && weakIndexes.length > answerIndexes.length) {
			findings.push({
				rule: 'shared-weaknesses',
				category: 'defense',
				impact: 'negative',
				magnitude: weakIndexes.length - answerIndexes.length,
				explanation: `${namesFor(team, weakIndexes).join(', ')} share a ${attackingType} weakness, while ${
					answerIndexes.length === 0 ? 'no team member' : namesFor(team, answerIndexes).join(', ')
				} provides a defensive answer.`,
				involvedPokemon: namesFor(team, [...weakIndexes, ...answerIndexes]),
				types: [attackingType],
			});
		}
	}

	return findings;
};

/** Reports a real defensive answer when an exposed type has at least one resisting or immune teammate. */
const defensiveAnswerRule: SynergyRule = (team, chart) => {
	const findings: SynergyFinding[] = [];

	for (const attackingType of Object.keys(chart)) {
		const weakIndexes: number[] = [];
		const answerIndexes: number[] = [];
		team.forEach((member, index) => {
			const profile = defensiveProfile(member.types, chart);
			if (profile.weaknesses.some((weakness) => weakness.type === attackingType)) weakIndexes.push(index);
			if (profile.immunities.includes(attackingType) || profile.resistances.some((resistance) => resistance.type === attackingType)) answerIndexes.push(index);
		});

		if (weakIndexes.length > 0 && answerIndexes.length > 0) {
			findings.push({
				rule: 'defensive-answers',
				category: 'defense',
				impact: 'positive',
				magnitude: answerIndexes.length,
				explanation: `${namesFor(team, answerIndexes).join(', ')} provides ${attackingType} defensive coverage for ${namesFor(
					team,
					weakIndexes,
				).join(', ')}.`,
				involvedPokemon: namesFor(team, [...weakIndexes, ...answerIndexes]),
				types: [attackingType],
			});
		}
	}

	return findings;
};

/**
 * This measures only STAB diversity, not move coverage. The distinction is intentional: the
 * roster query does not carry a selected moveset, so claiming complete offensive coverage would
 * fabricate knowledge the data does not have.
 */
const stabDiversityRule: SynergyRule = (team) => {
	const typeOwners = new Map<TypeSlug, string[]>();
	for (const member of team) {
		for (const type of member.types) typeOwners.set(type, [...(typeOwners.get(type) ?? []), member.name]);
	}

	if (typeOwners.size < 2) return [];
	return [
		{
			rule: 'stab-diversity',
			category: 'coverage',
			impact: 'positive',
			magnitude: typeOwners.size,
			explanation: `The team brings ${typeOwners.size} distinct STAB types: ${[...typeOwners.keys()].join(', ')}.`,
			involvedPokemon: [...team.map((member) => member.name)],
			types: [...typeOwners.keys()],
		},
	];
};

/** Doubles has two active partners, so complementary STAB lines are a directly useful fact. */
const partnerTypeDiversityRule: SynergyRule = (team) => {
	if (team.length < 2) return [];
	const types = [...new Set(team.flatMap((member) => member.types))];
	if (types.length < 3) return [];
	return [
		{
			rule: 'partner-type-diversity',
			category: 'coverage',
			impact: 'positive',
			magnitude: types.length,
			explanation: `${team.map((member) => member.name).join(' and ')} can field complementary STAB types in Doubles: ${types.join(', ')}.`,
			involvedPokemon: team.map((member) => member.name),
			types,
		},
	];
};

/** Format behavior is explicit and extension-friendly; UI code never branches over rule details. */
const FORMAT_RULES: Record<SynergyFormat, readonly SynergyRule[]> = {
	singles: [sharedWeaknessRule, defensiveAnswerRule, stabDiversityRule],
	doubles: [sharedWeaknessRule, defensiveAnswerRule, stabDiversityRule, partnerTypeDiversityRule],
};

export function analyzeTeamSynergy(team: readonly ChampionsSpecies[], chart: TypeChart, format: SynergyFormat): TeamSynergyAnalysis {
	const findings = FORMAT_RULES[format].flatMap((rule) => rule(team, chart));
	return {
		format,
		findings,
		positiveFindings: findings.filter((finding) => finding.impact === 'positive'),
		negativeFindings: findings.filter((finding) => finding.impact === 'negative'),
	};
}

/** Candidate ranking reuses the same evidence; it never assigns a separate opaque fit score. */
export function recommendSynergyCandidates<TCandidate extends ChampionsSpecies>(
	team: readonly ChampionsSpecies[],
	candidates: readonly TCandidate[],
	chart: TypeChart,
	format: SynergyFormat,
): SynergyCandidate<TCandidate>[] {
	const current = analyzeTeamSynergy(team, chart, format);
	const currentNegative = new Set(current.negativeFindings.map((finding) => `${finding.rule}:${finding.types.join(',')}`));
	const currentPositive = new Set(current.positiveFindings.map((finding) => `${finding.rule}:${finding.types.join(',')}`));

	return candidates
		.filter((candidate) => !team.some((member) => member.slug === candidate.slug))
		.map((candidate) => {
			const analysis = analyzeTeamSynergy([...team, candidate], chart, format);
			return {
				candidate,
				analysis,
				improvements: analysis.positiveFindings.filter((finding) => !currentPositive.has(`${finding.rule}:${finding.types.join(',')}`)),
				regressions: analysis.negativeFindings.filter((finding) => !currentNegative.has(`${finding.rule}:${finding.types.join(',')}`)),
			};
		})
		.sort(
			(first, second) =>
				second.improvements.reduce((total, finding) => total + finding.magnitude, 0) -
					first.improvements.reduce((total, finding) => total + finding.magnitude, 0) ||
				first.regressions.reduce((total, finding) => total + finding.magnitude, 0) -
					second.regressions.reduce((total, finding) => total + finding.magnitude, 0) ||
				first.candidate.name.localeCompare(second.candidate.name),
		);
}

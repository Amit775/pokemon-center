import { OpponentIntel } from './intel';
import { computeStats } from './stats';
import { effectiveSpeed } from './speed';
import { defensiveProfile, matchup, typeEffectiveness } from './matchup';
import { SynergyFormat } from './synergy';
import { ChampionsBuild, TypeChart } from './types';

/**
 * Pick & Lead recommendation engine.
 *
 * Same shape as `synergy.ts`: every rule produces traceable findings, never a hidden score. The
 * `score` on a `RankedCandidate` exists only to sort — the findings are the actual advice, and
 * `recommendSynergyCandidates` already establishes the precedent of summing finding magnitude
 * for ranking while keeping the findings themselves as the explanation.
 */

export interface SelectionFinding {
	rule: 'type-matchup' | 'physical-special-answer' | 'hazard-control' | 'weather' | 'speed-control' | 'mega-threat';
	category: 'type' | 'physical-special' | 'hazards' | 'weather' | 'speed-control' | 'mega-threat';
	impact: 'positive' | 'negative';
	magnitude: number;
	explanation: string;
}

export interface RankedCandidate {
	build: ChampionsBuild;
	findings: SelectionFinding[];
	score: number;
}

export interface SelectionRecommendation {
	bring: RankedCandidate[];
	leads: RankedCandidate[];
}

const HAZARD_SETTERS = new Set(['stealth-rock', 'spikes', 'toxic-spikes', 'sticky-web']);
const HAZARD_REMOVERS = new Set(['rapid-spin', 'defog', 'court-change', 'mortal-spin', 'tidy-up']);
const WEATHER_SETTERS: Record<string, string> = { 'sunny-day': 'sun', 'rain-dance': 'rain', sandstorm: 'sand', snowscape: 'snow', hail: 'snow' };
const WEATHER_BOOSTED_TYPE: Record<string, string> = { sun: 'fire', rain: 'water' };
const SPEED_CONTROL = new Set(['trick-room', 'tailwind', 'thunder-wave', 'stun-spore', 'glare', 'icy-wind', 'electroweb']);

const movesOf = (build: ChampionsBuild): string[] => build.moves.map((move) => move.slug);

function typeMatchupRule(candidate: ChampionsBuild, opponents: readonly ChampionsBuild[], chart: TypeChart): SelectionFinding[] {
	const results = opponents.map((theirs) => matchup(candidate, theirs, chart));
	const wins = results.filter((result) => result.verdict === 'you-win');
	const losses = results.filter((result) => result.verdict === 'they-win');
	const findings: SelectionFinding[] = [];

	if (wins.length > 0) {
		findings.push({
			rule: 'type-matchup',
			category: 'type',
			impact: 'positive',
			magnitude: wins.length,
			explanation: `${candidate.species.name} wins the matchup against ${wins.length} of ${opponents.length} revealed (${wins
				.map((result) => result.theirs.species.name)
				.join(', ')}).`,
		});
	}
	if (losses.length > 0) {
		findings.push({
			rule: 'type-matchup',
			category: 'type',
			impact: 'negative',
			magnitude: losses.length,
			explanation: `${candidate.species.name} loses the matchup against ${losses.length} of ${opponents.length} revealed (${losses
				.map((result) => result.theirs.species.name)
				.join(', ')}).`,
		});
	}
	return findings;
}

function dominantAttackStyle(opponents: readonly ChampionsBuild[]): { physical: number; special: number } {
	let physical = 0;
	let special = 0;
	for (const build of opponents) {
		for (const move of build.moves) {
			if (move.damageClass === 'PHYSICAL') physical += 1;
			else if (move.damageClass === 'SPECIAL') special += 1;
		}
	}
	return { physical, special };
}

function physicalSpecialAnswerRule(candidate: ChampionsBuild, opponents: readonly ChampionsBuild[]): SelectionFinding[] {
	const { physical, special } = dominantAttackStyle(opponents);
	if (physical === special) return [];

	const stats = computeStats(candidate.species.baseStats, candidate.statPoints, candidate.nature);
	const leansPhysical = physical > special;
	const relevantDefense = leansPhysical ? stats.defense : stats.specialDefense;
	const otherDefense = leansPhysical ? stats.specialDefense : stats.defense;
	const styleLabel = leansPhysical ? 'physical' : 'special';
	const revealedCount = leansPhysical ? physical : special;
	const total = physical + special;

	const impact = relevantDefense >= otherDefense ? 'positive' : 'negative';
	// Bucketed 1-3, not the raw stat-point gap: every other rule's magnitude is a small count
	// (wins/losses, presence flags), and summing a raw stat difference (tens of points) alongside
	// those let this one rule dominate `scoreOf`'s sum regardless of how many matchups, hazards,
	// or speed-control findings a candidate actually has.
	const gap = Math.abs(relevantDefense - otherDefense);
	const magnitude = gap >= 40 ? 3 : gap >= 20 ? 2 : 1;
	const lean = impact === 'positive' ? 'matches' : 'does not match';

	return [
		{
			rule: 'physical-special-answer',
			category: 'physical-special',
			impact,
			magnitude,
			explanation: `${candidate.species.name}'s bulk ${lean} their team's ${styleLabel} lean (${relevantDefense} vs ${otherDefense} defense, ${revealedCount} of ${total} revealed attacking moves are ${styleLabel}).`,
		},
	];
}

function hazardControlRule(candidate: ChampionsBuild, opponents: readonly ChampionsBuild[]): SelectionFinding[] {
	const findings: SelectionFinding[] = [];
	const candidateMoves = movesOf(candidate);
	const setsHazards = candidateMoves.some((slug) => HAZARD_SETTERS.has(slug));
	const removesHazards = candidateMoves.some((slug) => HAZARD_REMOVERS.has(slug));
	const opponentSetsHazards = opponents.some((build) => movesOf(build).some((slug) => HAZARD_SETTERS.has(slug)));

	if (setsHazards) {
		findings.push({
			rule: 'hazard-control',
			category: 'hazards',
			impact: 'positive',
			magnitude: 1,
			explanation: `${candidate.species.name} sets hazards, pressuring switches all game.`,
		});
	}
	if (removesHazards && opponentSetsHazards) {
		findings.push({
			rule: 'hazard-control',
			category: 'hazards',
			impact: 'positive',
			magnitude: 1,
			explanation: `${candidate.species.name} clears hazards, and their revealed team can set them.`,
		});
	}
	return findings;
}

function weatherRule(candidate: ChampionsBuild, opponents: readonly ChampionsBuild[], chart: TypeChart): SelectionFinding[] {
	const findings: SelectionFinding[] = [];
	const candidateWeather = candidate.moves.map((move) => WEATHER_SETTERS[move.slug]).find((weather): weather is string => Boolean(weather));

	if (candidateWeather) {
		findings.push({
			rule: 'weather',
			category: 'weather',
			impact: 'positive',
			magnitude: 1,
			explanation: `${candidate.species.name} sets ${candidateWeather}.`,
		});
	}

	const opponentWeathers = new Set(
		opponents.flatMap((build) => build.moves.map((move) => WEATHER_SETTERS[move.slug]).filter((weather): weather is string => Boolean(weather))),
	);
	for (const weather of opponentWeathers) {
		const boostedType = WEATHER_BOOSTED_TYPE[weather];
		if (!boostedType) continue;
		const multiplier = typeEffectiveness(boostedType, candidate.species.types, chart);
		if (multiplier > 1) {
			// Bucketed to the same 1-2 scale as the rest of this rule set (see
			// physicalSpecialAnswerRule's comment above for why mixing scales in `scoreOf`'s sum
			// is a problem) — the actual multiplier is still shown in the explanation text.
			findings.push({
				rule: 'weather',
				category: 'weather',
				impact: 'negative',
				magnitude: multiplier >= 4 ? 2 : 1,
				explanation: `Their revealed team can set ${weather}, boosting ${boostedType}-type damage ×${multiplier}, which ${candidate.species.name} is weak to.`,
			});
		}
	}
	return findings;
}

function speedControlRule(candidate: ChampionsBuild, opponents: readonly ChampionsBuild[]): SelectionFinding[] {
	const findings: SelectionFinding[] = [];
	if (movesOf(candidate).some((slug) => SPEED_CONTROL.has(slug))) {
		findings.push({
			rule: 'speed-control',
			category: 'speed-control',
			impact: 'positive',
			magnitude: 1,
			explanation: `${candidate.species.name} provides speed control.`,
		});
	}

	const candidateSpeed = effectiveSpeed(candidate);
	const outsped = opponents.filter((theirs) => candidateSpeed > effectiveSpeed(theirs));
	if (outsped.length > 0) {
		findings.push({
			rule: 'speed-control',
			category: 'speed-control',
			impact: 'positive',
			magnitude: outsped.length,
			explanation: `${candidate.species.name} naturally outspeeds ${outsped.length} of ${opponents.length} revealed.`,
		});
	}
	return findings;
}

function megaThreatRule(candidate: ChampionsBuild, opponents: readonly OpponentIntel[], chart: TypeChart): SelectionFinding[] {
	const findings: SelectionFinding[] = [];
	const profile = defensiveProfile(candidate.species.types, chart);

	for (const opponent of opponents) {
		if (!opponent.megaPreview) continue;
		const megaTypes = opponent.megaPreview.types;
		const hasAnswer =
			profile.resistances.some((resistance) => megaTypes.includes(resistance.type)) || profile.immunities.some((type) => megaTypes.includes(type));
		if (!hasAnswer) {
			findings.push({
				rule: 'mega-threat',
				category: 'mega-threat',
				impact: 'negative',
				magnitude: 1,
				explanation: `${opponent.build.species.name} can Mega Evolve into a ${megaTypes.join('/')} attacker, and ${candidate.species.name} has no resistance to it.`,
			});
		}
	}
	return findings;
}

const scoreOf = (findings: SelectionFinding[]): number =>
	findings.reduce((total, finding) => total + (finding.impact === 'positive' ? finding.magnitude : -finding.magnitude), 0);

/**
 * Rank your team for who to bring, and pick the leader(s) from the top of that ranking.
 *
 * Leads are the top-ranked entries of `bring` rather than a separately-weighted "turn-1" score:
 * speed control, hazard control and Mega-threat coverage already contribute to the same ranking,
 * and a second scoring formula would need its own justification for the weights it chose —
 * exactly the "hidden strategic score" this engine's findings-first design avoids elsewhere.
 */
export function recommendSelection(
	yourTeam: readonly ChampionsBuild[],
	opponents: readonly OpponentIntel[],
	chart: TypeChart,
	format: SynergyFormat,
	bringCount: number,
): SelectionRecommendation {
	const opponentBuilds = opponents.map((opponent) => opponent.build);

	const ranked: RankedCandidate[] = yourTeam.map((candidateBuild) => {
		const findings = [
			...typeMatchupRule(candidateBuild, opponentBuilds, chart),
			...physicalSpecialAnswerRule(candidateBuild, opponentBuilds),
			...hazardControlRule(candidateBuild, opponentBuilds),
			...weatherRule(candidateBuild, opponentBuilds, chart),
			...speedControlRule(candidateBuild, opponentBuilds),
			...megaThreatRule(candidateBuild, opponents, chart),
		];
		return { build: candidateBuild, findings, score: scoreOf(findings) };
	});

	ranked.sort((first, second) => second.score - first.score || first.build.species.name.localeCompare(second.build.species.name));

	const bring = ranked.slice(0, Math.min(bringCount, ranked.length));
	const leadCount = format === 'doubles' ? 2 : 1;
	const leads = bring.slice(0, Math.min(leadCount, bring.length));

	return { bring, leads };
}

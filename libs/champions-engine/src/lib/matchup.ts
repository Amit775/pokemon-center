import { effectiveSpeed } from './speed';
import { bestMoveAgainst, DamageResult, koVerdict, type KoVerdict } from './damage';
import { ChampionsBuild, CLEAR_FIELD, FieldState, TypeChart, TypeSlug } from './types';

/**
 * Type relations and team-level threat assessment.
 *
 * This is where the advisor earns its keep: not "what does this move do" but "who on their
 * six beats who on mine, and which of theirs must I remove". Everything is computed both
 * directions, because a matchup where you KO them but they KO you first is a losing one.
 */

/** Combined multiplier of one attacking type against a defender's typing. */
export function typeEffectiveness(attacking: TypeSlug, defending: TypeSlug[], chart: TypeChart): number {
	return defending.reduce((total, type) => total * (chart[attacking]?.[type] ?? 1), 1);
}

export interface DefensiveProfile {
	/** Types this Pokémon takes extra damage from, with the multiplier. */
	weaknesses: { type: TypeSlug; multiplier: number }[];
	resistances: { type: TypeSlug; multiplier: number }[];
	immunities: TypeSlug[];
}

/** How a single Pokémon fares against every attacking type. */
export function defensiveProfile(defending: TypeSlug[], chart: TypeChart): DefensiveProfile {
	const profile: DefensiveProfile = { weaknesses: [], resistances: [], immunities: [] };

	for (const attacking of Object.keys(chart)) {
		const multiplier = typeEffectiveness(attacking, defending, chart);
		if (multiplier === 0) profile.immunities.push(attacking);
		else if (multiplier > 1) profile.weaknesses.push({ type: attacking, multiplier });
		else if (multiplier < 1) profile.resistances.push({ type: attacking, multiplier });
	}

	// Sharpest first — a 4× weakness is the headline, not a footnote.
	profile.weaknesses.sort((first, second) => second.multiplier - first.multiplier);
	profile.resistances.sort((first, second) => first.multiplier - second.multiplier);
	return profile;
}

export interface TeamTypeProfile {
	/** Attacking type → how many team members it hits for more than neutral. */
	pressure: { type: TypeSlug; hits: number; averageMultiplier: number }[];
	/** Attacking types the team collectively resists or is immune to. */
	covered: TypeSlug[];
}

/**
 * A whole team's defensive shape.
 *
 * The output that matters is `pressure`: the types that hit the most of their six hardest.
 * That is the question a trainer is actually asking at team preview — "what do I click?"
 */
export function teamWeaknesses(team: ChampionsBuild[], chart: TypeChart): TeamTypeProfile {
	const pressure: TeamTypeProfile['pressure'] = [];
	const covered: TypeSlug[] = [];

	for (const attacking of Object.keys(chart)) {
		const multipliers = team.map((member) => typeEffectiveness(attacking, member.species.types, chart));
		const hits = multipliers.filter((multiplier) => multiplier > 1).length;
		const average = multipliers.reduce((sum, multiplier) => sum + multiplier, 0) / (multipliers.length || 1);

		if (hits > 0) pressure.push({ type: attacking, hits, averageMultiplier: Number(average.toFixed(2)) });
		else if (average < 1) covered.push(attacking);
	}

	pressure.sort((first, second) => second.hits - first.hits || second.averageMultiplier - first.averageMultiplier);
	return { pressure, covered };
}

/**
 * Attacking types the team cannot hit for at least neutral damage on some target.
 *
 * The mirror of `teamWeaknesses`, used when checking your own six for a hole.
 */
export function coverageGaps(team: ChampionsBuild[], chart: TypeChart, allDefendingTypes: TypeSlug[]): TypeSlug[] {
	const attackingTypes = new Set(team.flatMap((member) => member.moves.filter((move) => move.damageClass !== 'STATUS').map((move) => move.type)));

	return allDefendingTypes.filter((defending) => {
		const best = [...attackingTypes].reduce((max, attacking) => Math.max(max, chart[attacking]?.[defending] ?? 1), 0);
		return best < 1;
	});
}

export type MatchupVerdict = 'you-win' | 'they-win' | 'close' | 'stall';

export interface Matchup {
	yours: ChampionsBuild;
	theirs: ChampionsBuild;
	/** Your best move into them, and what it does. */
	yourBest: { moveName: string; result: DamageResult; ko: KoVerdict } | null;
	theirBest: { moveName: string; result: DamageResult; ko: KoVerdict } | null;
	yourSpeed: number;
	theirSpeed: number;
	youOutspeed: boolean;
	verdict: MatchupVerdict;
	/** One line explaining the verdict, shown under the grid cell. */
	reason: string;
}

const KO_SPEED: Record<KoVerdict, number> = {
	'guaranteed-ohko': 1,
	'possible-ohko': 1.5,
	'guaranteed-2hko': 2,
	'possible-2hko': 2.5,
	'3hko-or-worse': 4,
	'no-damage': Infinity,
};

/**
 * One-on-one assessment, speed-aware.
 *
 * "Turns to KO" alone is not enough — the faster side effectively gets a free turn, so a
 * 2HKO from something that outspeeds beats a 2HKO from something that does not.
 */
export function matchup(yours: ChampionsBuild, theirs: ChampionsBuild, chart: TypeChart, field: FieldState = CLEAR_FIELD): Matchup {
	const yourAttack = bestMoveAgainst(yours, theirs, chart, { field });
	const theirAttack = bestMoveAgainst(theirs, yours, chart, { field });

	const yourSpeed = effectiveSpeed(yours, { field });
	const theirSpeed = effectiveSpeed(theirs, { field });
	const youOutspeed = yourSpeed > theirSpeed;

	const yourKo = yourAttack ? koVerdict(yourAttack.result) : 'no-damage';
	const theirKo = theirAttack ? koVerdict(theirAttack.result) : 'no-damage';

	const yourTurns = KO_SPEED[yourKo];
	const theirTurns = KO_SPEED[theirKo];

	// The slower side needs to survive one extra turn, so it is effectively half a turn worse.
	//
	// The comparison is strict rather than requiring a full turn of margin, because moving
	// first *is* the margin: if both sides need two hits and you outspeed, you hit, they hit,
	// you hit — and they faint before their second. Demanding another whole turn on top of
	// that reported almost every even matchup as "close", which is not advice.
	// A speed tie penalises neither side. Folding a tie into "not outspeeding" made every
	// mirror match report as a loss, which is obviously wrong and was visible the moment the
	// grid rendered two identical teams.
	const speedTie = yourSpeed === theirSpeed;
	const yourEffective = yourTurns + (!speedTie && !youOutspeed ? 0.5 : 0);
	const theirEffective = theirTurns + (!speedTie && youOutspeed ? 0.5 : 0);

	let verdict: MatchupVerdict;
	let reason: string;

	if (yourTurns === Infinity && theirTurns === Infinity) {
		verdict = 'stall';
		reason = 'Neither side can damage the other.';
	} else if (yourEffective < theirEffective) {
		verdict = 'you-win';
		reason = `${yours.species.name} ${yourKo.replace(/-/g, ' ')}s${youOutspeed ? ' and outspeeds' : ''}.`;
	} else if (theirEffective < yourEffective) {
		verdict = 'they-win';
		reason = `${theirs.species.name} ${theirKo.replace(/-/g, ' ')}s${youOutspeed ? '' : ' and outspeeds'}.`;
	} else {
		verdict = 'close';
		reason = youOutspeed ? 'Close — you move first.' : 'Close — they move first.';
	}

	return {
		yours,
		theirs,
		yourBest: yourAttack ? { moveName: yourAttack.move.name, result: yourAttack.result, ko: yourKo } : null,
		theirBest: theirAttack ? { moveName: theirAttack.move.name, result: theirAttack.result, ko: theirKo } : null,
		yourSpeed,
		theirSpeed,
		youOutspeed,
		verdict,
		reason,
	};
}

export interface ThreatAssessment {
	/** Row per member of your team, column per member of theirs. */
	grid: Matchup[][];
	/** Their Pokémon that beat the most of your six — remove these. */
	mustRemove: { build: ChampionsBuild; beats: number }[];
	/** Your Pokémon that beat the most of their six — these are your win conditions. */
	winConditions: { build: ChampionsBuild; beats: number }[];
}

/**
 * The full six-by-six, plus the two summaries a trainer acts on.
 *
 * At team preview you have 90 seconds and 36 matchups. Ranking both sides by how many
 * matchups they win turns that into two short lists.
 */
export function threatMatrix(yours: ChampionsBuild[], theirs: ChampionsBuild[], chart: TypeChart, field: FieldState = CLEAR_FIELD): ThreatAssessment {
	const grid = yours.map((mine) => theirs.map((their) => matchup(mine, their, chart, field)));

	const mustRemove = theirs
		.map((build, column) => ({ build, beats: grid.filter((row) => row[column].verdict === 'they-win').length }))
		.sort((first, second) => second.beats - first.beats);

	const winConditions = yours
		.map((build, row) => ({ build, beats: grid[row].filter((cell) => cell.verdict === 'you-win').length }))
		.sort((first, second) => second.beats - first.beats);

	return { grid, mustRemove, winConditions };
}

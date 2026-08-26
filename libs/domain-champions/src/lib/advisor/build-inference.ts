import {
	assumeMaxInvestment,
	ChampionsBuild,
	ChampionsMove,
	ChampionsSpecies,
	NEUTRAL_NATURE,
	StatKey,
	TypeChart,
} from '@pokemon-center/champions-engine';
import type { ChampionsTeamQuery, TypeChartQuery } from '@pokemon-center/data-access-champions';

/**
 * Turns what the dex knows into what the engine needs — **for opponents only**.
 *
 * Your own six comes from the Box, where the spread and moves are facts rather than guesses
 * (see `boxEntryToBuild`). This file exists for the other side of the field, where you know
 * a species and nothing else. How that gap is filled is a correctness decision, not a detail:
 *
 *  - Investment is assumed **maximal** in the stats that threaten you. Assuming zero would
 *    make every opponent look slower and frailer than they are, and an advisor that
 *    flatters you loses games.
 *  - Nature is assumed **neutral**, because the dangerous nature for Speed (Jolly) and the
 *    dangerous one for damage (Adamant) are mutually exclusive. Rather than pick one and be
 *    confidently wrong, the UI shows the full Speed *band* alongside.
 *  - Moves are the strongest STAB and coverage options in the learnset. These are
 *    **computed, not observed**, and the UI says so — until the battle tracker starts
 *    harvesting real sets, an inferred moveset is a hypothesis.
 */

type TeamMember = ChampionsTeamQuery['champTeam'][number];

/** Build the engine's nested type chart from the flat rows the API returns. */
export function toTypeChart(rows: TypeChartQuery['typeChart']): TypeChart {
	const chart: TypeChart = {};
	for (const row of rows) {
		chart[row.attacking] ??= {};
		chart[row.attacking][row.defending] = row.factor;
	}
	return chart;
}

function toSpecies(member: TeamMember): ChampionsSpecies {
	return {
		id: member.id,
		slug: member.slug,
		name: member.name,
		types: member.types,
		baseStats: {
			hp: member.baseStats.hp,
			attack: member.baseStats.attack,
			defense: member.baseStats.defense,
			specialAttack: member.baseStats.specialAttack,
			specialDefense: member.baseStats.specialDefense,
			speed: member.baseStats.speed,
		},
		isMega: member.isMega,
		abilities: member.abilities.map((ability) => ability.ability.slug),
	};
}

function toMove(move: TeamMember['moves'][number]): ChampionsMove {
	return {
		id: move.id,
		slug: move.slug,
		name: move.name,
		type: move.type,
		damageClass: move.damageClass,
		power: move.power ?? null,
		accuracy: move.accuracy ?? null,
		priority: move.priority,
		flags: move.flags,
	};
}

/** Which attacking stat this species leans on. */
export function primaryAttackStat(member: TeamMember): Extract<StatKey, 'attack' | 'specialAttack'> {
	return member.baseStats.attack >= member.baseStats.specialAttack ? 'attack' : 'specialAttack';
}

/**
 * Pick a plausible four moves from a learnset.
 *
 * Strongest same-type attack first (STAB is the biggest single multiplier a set can carry),
 * then the strongest distinct coverage types, then priority. One move per type, because a
 * set with three Dragon moves is not a set anyone brings.
 */
export function inferMoveset(member: TeamMember, limit = 4): ChampionsMove[] {
	const attacking = member.moves.filter((move) => move.damageClass !== 'STATUS' && (move.power ?? 0) > 0);
	const stabTypes = new Set(member.types);

	const ranked = [...attacking].sort((first, second) => {
		const aStab = stabTypes.has(first.type) ? 1 : 0;
		const bStab = stabTypes.has(second.type) ? 1 : 0;
		return bStab - aStab || (second.power ?? 0) - (first.power ?? 0);
	});

	const chosen: typeof ranked = [];
	const usedTypes = new Set<string>();

	for (const move of ranked) {
		if (usedTypes.has(move.type)) continue;
		chosen.push(move);
		usedTypes.add(move.type);
		if (chosen.length === limit) break;
	}

	// A strong priority move changes the turn order and so changes the advice; it earns a
	// slot even when a bigger neutral option exists.
	const priority = ranked.find((m) => m.priority > 0 && !chosen.some((c) => c.id === m.id));
	if (priority && chosen.length === limit) chosen[limit - 1] = priority;
	else if (priority) chosen.push(priority);

	return chosen.slice(0, limit).map(toMove);
}

export interface InferredBuild extends ChampionsBuild {
	/** True when the moveset was computed rather than observed. */
	movesAreInferred: boolean;
	/** True when the learnset itself is an approximation (see the derive pipeline). */
	learnsetIsApproximate: boolean;
}

/**
 * A battle-ready build for a Pokémon you only know the species of.
 *
 * `ability` takes the first non-hidden slot for a base form, and a Mega's fixed ability for
 * a Mega — the latter is certain, which is one of the few things you *do* know for free.
 */
export function inferBuild(member: TeamMember): InferredBuild {
	const species = toSpecies(member);
	const attackStat = primaryAttackStat(member);

	return {
		species,
		nature: NEUTRAL_NATURE,
		statPoints: assumeMaxInvestment(attackStat, 'speed'),
		ability: member.megaAbility?.slug ?? member.abilities.find((ability) => !ability.isHidden)?.ability.slug ?? null,
		item: null,
		moves: inferMoveset(member),
		movesAreInferred: true,
		learnsetIsApproximate: member.learnsetIsApproximate,
	};
}

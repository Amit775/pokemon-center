import { applyStage, computeStats, statAt50 } from './stats';
import { typeEffectiveness } from './matchup';
import {
	ActiveState,
	CHAMPIONS_LEVEL,
	ChampionsBuild,
	ChampionsMove,
	CLEAR_FIELD,
	FieldState,
	NO_BOOSTS,
	Status,
	TypeChart,
} from './types';

/**
 * Champions' damage maths.
 *
 * The core formula is the mainline one at a fixed level 50:
 *
 *   base = floor((floor(2·50/5 + 2) · Power · Atk / Def) / 50) + 2
 *   damage = floor(base · modifiers · roll)
 *
 * What changes is everything feeding into it — Champions' rebalanced move values arrive via
 * the seeded `champ_move` rows, and the stats come from the SP system. The engine therefore
 * takes moves and builds as data and never hard-codes a power or a base stat.
 *
 * Damage is returned as the full 16-roll range rather than an average. "84–99%" and "92%"
 * are different pieces of advice: the first says a roll can save you, the second implies a
 * certainty the game does not offer.
 */

/** The sixteen equally likely damage rolls, as percentages of the calculated damage. */
const ROLLS = [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

export interface DamageContext {
	field?: FieldState;
	/** Attacker's stat stages. */
	attackerBoosts?: Partial<typeof NO_BOOSTS>;
	/** Defender's stat stages. */
	defenderBoosts?: Partial<typeof NO_BOOSTS>;
	attackerStatus?: Status;
	/** Doubles only: a spread move hitting more than one target is weakened. */
	isSpreadHittingMultiple?: boolean;
	isCritical?: boolean;
	/** Defender is behind Reflect or Light Screen. */
	screenUp?: boolean;
	/** Unseen Fist and Champions' 25% chip on a protecting target. */
	targetIsProtecting?: boolean;
}

export interface DamageResult {
	/** Damage for each of the sixteen rolls, ascending. */
	rolls: number[];
	min: number;
	max: number;
	/** Damage as a fraction of the defender's maximum HP, 0..1. */
	minFraction: number;
	maxFraction: number;
	defenderMaxHp: number;
	/** Combined type multiplier, e.g. 4 for a double weakness, 0 for an immunity. */
	effectiveness: number;
	/** How many hits are needed at worst, or null when the move cannot KO. */
	hitsToKo: number | null;
	/** True when even the lowest roll knocks the defender out. */
	guaranteedKo: boolean;
	/** True when only the highest rolls knock the defender out. */
	possibleKo: boolean;
	/** Short explanation of the modifiers that applied, for the tooltip. */
	notes: string[];
}

const WEATHER_BOOST: Record<string, { type: string; multiplier: number }[]> = {
	sun: [
		{ type: 'fire', multiplier: 1.5 },
		{ type: 'water', multiplier: 0.5 },
	],
	rain: [
		{ type: 'water', multiplier: 1.5 },
		{ type: 'fire', multiplier: 0.5 },
	],
};

/** Abilities that scale the attacker's damage under a simple condition. */
function attackerAbilityMultiplier(build: ChampionsBuild, move: ChampionsMove, effectiveness: number): number {
	switch (build.ability) {
		case 'adaptability':
			return 1; // handled in the STAB term
		case 'technician':
			return (move.power ?? 0) <= 60 ? 1.5 : 1;
		case 'iron-fist':
			return move.flags.includes('punch') ? 1.2 : 1;
		case 'tough-claws':
			return move.flags.includes('contact') ? 1.3 : 1;
		case 'sharpness':
			return move.flags.includes('slicing') ? 1.5 : 1;
		case 'punk-rock':
			return move.flags.includes('sound') ? 1.3 : 1;
		case 'sheer-force':
			return 1.3;
		case 'analytic':
			return 1.3;
		case 'tinted-lens':
			return effectiveness < 1 && effectiveness > 0 ? 2 : 1;
		default:
			return 1;
	}
}

function stabMultiplier(build: ChampionsBuild, move: ChampionsMove): number {
	if (!build.species.types.includes(move.type)) return 1;
	return build.ability === 'adaptability' ? 2 : 1.5;
}

/**
 * Damage one move does to one target.
 *
 * `typeChart` is passed in rather than imported so the engine stays data-free and a
 * regulation that changes the chart needs no code change.
 */
export function damageRoll(
	attacker: ChampionsBuild,
	defender: ChampionsBuild,
	move: ChampionsMove,
	typeChart: TypeChart,
	context: DamageContext = {},
): DamageResult {
	const field = context.field ?? CLEAR_FIELD;
	const notes: string[] = [];

	const defenderStats = computeStats(defender.species.baseStats, defender.statPoints, defender.nature);
	const defenderMaxHp = defenderStats.hp;

	const effectiveness = typeEffectiveness(move.type, defender.species.types, typeChart);

	const empty = (): DamageResult => ({
		rolls: ROLLS.map(() => 0),
		min: 0,
		max: 0,
		minFraction: 0,
		maxFraction: 0,
		defenderMaxHp,
		effectiveness,
		hitsToKo: null,
		guaranteedKo: false,
		possibleKo: false,
		notes,
	});

	if (move.damageClass === 'STATUS' || move.power === null || move.power === 0) {
		notes.push('Status move — deals no direct damage.');
		return empty();
	}

	if (effectiveness === 0) {
		notes.push(`${defender.species.name} is immune to ${move.type} moves.`);
		return empty();
	}

	const isPhysical = move.damageClass === 'PHYSICAL';
	const attackKey = isPhysical ? 'attack' : 'specialAttack';
	const defenceKey = isPhysical ? 'defense' : 'specialDefense';

	let attack = statAt50(attacker.species.baseStats[attackKey], attackKey, attacker.statPoints[attackKey], attacker.nature);
	let defence = statAt50(defender.species.baseStats[defenceKey], defenceKey, defender.statPoints[defenceKey], defender.nature);

	const attackStage = context.attackerBoosts?.[attackKey] ?? 0;
	const defenceStage = context.defenderBoosts?.[defenceKey] ?? 0;

	// A critical hit ignores the attacker's drops and the defender's boosts.
	attack = applyStage(attack, context.isCritical && attackStage < 0 ? 0 : attackStage);
	defence = applyStage(defence, context.isCritical && defenceStage > 0 ? 0 : defenceStage);

	if (attacker.item === 'choice-band' && isPhysical) attack = Math.floor(attack * 1.5);
	if (attacker.item === 'choice-specs' && !isPhysical) attack = Math.floor(attack * 1.5);

	const levelTerm = Math.floor((2 * CHAMPIONS_LEVEL) / 5 + 2);
	const base = Math.floor(Math.floor((levelTerm * move.power * attack) / defence) / 50) + 2;

	let modifier = 1;

	if (context.isSpreadHittingMultiple) {
		modifier *= 0.75;
		notes.push('Spread move hitting multiple targets (×0.75).');
	}

	for (const boost of WEATHER_BOOST[field.weather] ?? []) {
		if (move.type === boost.type) {
			modifier *= boost.multiplier;
			notes.push(`${field.weather} ${boost.multiplier > 1 ? 'boosts' : 'weakens'} ${move.type} (×${boost.multiplier}).`);
		}
	}

	if (context.isCritical) {
		modifier *= 1.5;
		notes.push('Critical hit (×1.5).');
	}

	const stab = stabMultiplier(attacker, move);
	if (stab > 1) {
		modifier *= stab;
		notes.push(stab === 2 ? 'Adaptability STAB (×2).' : 'STAB (×1.5).');
	}

	modifier *= effectiveness;
	if (effectiveness > 1) notes.push(`${effectiveness === 4 ? 'Extremely' : 'Super'} effective (×${effectiveness}).`);
	if (effectiveness < 1) notes.push(`${effectiveness === 0.25 ? 'Mostly ineffective' : 'Not very effective'} (×${effectiveness}).`);

	if (context.attackerStatus === 'burn' && isPhysical && attacker.ability !== 'guts') {
		modifier *= 0.5;
		notes.push('Burned attacker (×0.5).');
	}

	if (context.screenUp && !context.isCritical) {
		modifier *= 0.5;
		notes.push('Screen up (×0.5).');
	}

	const abilityMultiplier = attackerAbilityMultiplier(attacker, move, effectiveness);
	if (abilityMultiplier !== 1) {
		modifier *= abilityMultiplier;
		notes.push(`${attacker.ability} (×${abilityMultiplier}).`);
	}

	if (attacker.item === 'life-orb') {
		modifier *= 1.3;
		notes.push('Life Orb (×1.3).');
	}

	// Champions change: a protecting target still takes a quarter from Unseen Fist.
	if (context.targetIsProtecting) {
		if (attacker.ability === 'unseen-fist' && move.flags.includes('contact')) {
			modifier *= 0.25;
			notes.push('Unseen Fist through Protect (×0.25 in Champions, was full damage).');
		} else {
			notes.push('Target is protecting — no damage.');
			return empty();
		}
	}

	// The roll is applied to the base damage and floored before the modifiers, matching the
	// games' order; a damaging hit never deals less than 1.
	const rolls = ROLLS.map((roll) => Math.max(1, Math.floor(Math.floor((base * roll) / 100) * modifier)));
	const min = Math.min(...rolls);
	const max = Math.max(...rolls);

	const hitsToKo = min > 0 ? Math.ceil(defenderMaxHp / min) : null;

	return {
		rolls,
		min,
		max,
		minFraction: min / defenderMaxHp,
		maxFraction: max / defenderMaxHp,
		defenderMaxHp,
		effectiveness,
		hitsToKo,
		guaranteedKo: min >= defenderMaxHp,
		possibleKo: max >= defenderMaxHp && min < defenderMaxHp,
		notes,
	};
}

/** How a KO chance should be described in the UI. */
export type KoVerdict = 'guaranteed-ohko' | 'possible-ohko' | 'guaranteed-2hko' | 'possible-2hko' | '3hko-or-worse' | 'no-damage';

/**
 * Turn a damage range into the sentence a trainer actually needs mid-battle.
 *
 * The distinction between "guaranteed" and "possible" is the whole point: a possible OHKO is
 * a gamble, and the advisor must never round it up to a certainty.
 */
export function koVerdict(result: DamageResult, defenderHpFraction = 1): KoVerdict {
	if (result.max === 0) return 'no-damage';

	const remaining = result.defenderMaxHp * defenderHpFraction;
	if (result.min >= remaining) return 'guaranteed-ohko';
	if (result.max >= remaining) return 'possible-ohko';
	if (result.min * 2 >= remaining) return 'guaranteed-2hko';
	if (result.max * 2 >= remaining) return 'possible-2hko';
	return '3hko-or-worse';
}

/** Best damaging move against a target, by worst-case damage — the roll you can rely on. */
export function bestMoveAgainst(
	attacker: ChampionsBuild,
	defender: ChampionsBuild,
	typeChart: TypeChart,
	context: DamageContext = {},
): { move: ChampionsMove; result: DamageResult } | null {
	const damaging = attacker.moves
		.filter((move) => move.damageClass !== 'STATUS' && (move.power ?? 0) > 0)
		.map((move) => ({ move, result: damageRoll(attacker, defender, move, typeChart, context) }))
		.filter((entry) => entry.result.max > 0);

	if (damaging.length === 0) return null;

	// Rank on the minimum roll: the advisor should recommend what works, not what might.
	return damaging.sort((a, b) => b.result.min - a.result.min || b.result.max - a.result.max)[0];
}

/** Convenience for the live tracker, which already holds both sides' state. */
export function damageBetweenActive(
	attacker: ActiveState,
	defender: ActiveState,
	move: ChampionsMove,
	typeChart: TypeChart,
	field: FieldState = CLEAR_FIELD,
): DamageResult {
	return damageRoll(attacker.build, defender.build, move, typeChart, {
		field,
		attackerBoosts: attacker.boosts,
		defenderBoosts: defender.boosts,
		attackerStatus: attacker.status,
	});
}

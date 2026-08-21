import {
	CHAMPIONS_LEVEL,
	NEUTRAL_NATURE,
	Nature,
	SP_PER_STAT_CAP,
	SP_TOTAL_BUDGET,
	STAT_KEYS,
	StatKey,
	StatPoints,
	StatSpread,
	StatStage,
} from './types';

/**
 * Champions' stat maths.
 *
 * Three things differ from the mainline games and all three matter to the advisor:
 *
 *  1. **No IVs.** Every Pokémon behaves as though it had 31 in every stat, so the term is a
 *     constant rather than an input.
 *  2. **Stat Points replace EVs.** 66 across the six stats, at most 32 in one. Crucially SP
 *     is added *after* the level division, where EVs were added before it and divided by
 *     four — which is why a point of SP is a point of stat.
 *  3. **Level is fixed at 50.**
 *
 * The formula below is taken from published Champions references. The reason to trust it is
 * that it conserves mainline power levels almost exactly: 32 SP yields +32 to a stat, while
 * 252 EVs yielded floor(252/4)/2 = +31.5, and the 66-point budget lines up with 510 EVs the
 * same way. A formula that quietly halved everyone's investment would not.
 *
 * The one genuinely uncertain detail is whether SP lands inside or outside the nature
 * multiplier. It is inside here, so a boosting nature scales the invested points too. That
 * choice is isolated in `statAt50` and is worth confirming against one real in-game number
 * before trusting a close speed tie.
 */

/** Every Pokémon in Champions is treated as having a perfect IV in each stat. */
export const CHAMPIONS_IV = 31;

/** The ±10% a nature applies, or 1 when it does not touch the stat. */
export function natureMultiplier(nature: Nature, stat: StatKey): number {
	if (stat === 'hp') return 1;
	if (nature.raises === stat && nature.lowers !== stat) return 1.1;
	if (nature.lowers === stat && nature.raises !== stat) return 0.9;
	return 1;
}

/**
 * One stat at Champions' fixed level 50.
 *
 *   HP:    floor((2·Base + 31) · 50 / 100) + 50 + 10 + SP
 *   other: floor((floor((2·Base + 31) · 50 / 100) + 5 + SP) · nature)
 *
 * Shedinja is not a special case here — no Champions roster entry has 1 base HP — so the
 * usual "HP 1" exception is deliberately absent.
 */
export function statAt50(baseStat: number, stat: StatKey, statPoints = 0, nature: Nature = NEUTRAL_NATURE): number {
	const scaled = Math.floor(((2 * baseStat + CHAMPIONS_IV) * CHAMPIONS_LEVEL) / 100);

	if (stat === 'hp') return scaled + CHAMPIONS_LEVEL + 10 + statPoints;

	return Math.floor((scaled + 5 + statPoints) * natureMultiplier(nature, stat));
}

/** All six stats for a build. */
export function computeStats(baseStats: StatSpread, statPoints: StatPoints, nature: Nature = NEUTRAL_NATURE): StatSpread {
	return STAT_KEYS.reduce((spread, key) => {
		spread[key] = statAt50(baseStats[key], key, statPoints[key], nature);
		return spread;
	}, {} as StatSpread);
}

/** Multipliers for stat stages −6..+6. Index 6 is stage 0. */
const STAGE_MULTIPLIERS = [2 / 8, 2 / 7, 2 / 6, 2 / 5, 2 / 4, 2 / 3, 1, 3 / 2, 4 / 2, 5 / 2, 6 / 2, 7 / 2, 8 / 2];

/**
 * Apply a stat stage.
 *
 * Note this is the *offensive* ladder, which is also what defensive stats use — the
 * asymmetric accuracy/evasion ladder is a different table and is not modelled here.
 */
export function applyStage(stat: number, stage: StatStage): number {
	return Math.floor(stat * STAGE_MULTIPLIERS[stage + 6]);
}

export interface SpreadValidity {
	isLegal: boolean;
	total: number;
	/** Stats invested beyond the 32-point cap. */
	overCap: StatKey[];
	/** Points still unspent, or 0 when the budget is blown. */
	remaining: number;
}

/**
 * Check a spread against Champions' budget: 66 points total, 32 per stat.
 *
 * Useful beyond team building — when the advisor infers an opponent's investment from
 * observed damage, a spread that fails this check means the inference is wrong.
 */
export function validateSpread(statPoints: StatPoints): SpreadValidity {
	const total = STAT_KEYS.reduce((sum, key) => sum + statPoints[key], 0);
	const overCap = STAT_KEYS.filter((key) => statPoints[key] > SP_PER_STAT_CAP);

	return {
		isLegal: total <= SP_TOTAL_BUDGET && overCap.length === 0 && STAT_KEYS.every((key) => statPoints[key] >= 0),
		total,
		overCap,
		remaining: Math.max(0, SP_TOTAL_BUDGET - total),
	};
}

/** A spread with everything at zero — the honest default for an opponent you know nothing about. */
export function emptySpread(): StatPoints {
	return { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0 };
}

/**
 * The spread to assume for an unknown opponent: maximum investment in the stat they most
 * plausibly invest in, which for threat assessment means assuming the worst.
 *
 * Guessing 0 SP would make every opponent look slower and frailer than they are, and an
 * advisor that flatters you is worse than none.
 */
export function assumeMaxInvestment(...stats: Exclude<StatKey, 'hp'>[]): StatPoints {
	const spread = emptySpread();
	for (const stat of stats.slice(0, 2)) spread[stat] = SP_PER_STAT_CAP;
	// Whatever is left over conventionally goes to bulk.
	const spent = stats.slice(0, 2).length * SP_PER_STAT_CAP;
	spread.hp = Math.min(SP_PER_STAT_CAP, SP_TOTAL_BUDGET - spent);
	return spread;
}

import { applyStage, statAt50 } from './stats';
import { ActiveState, ChampionsBuild, CLEAR_FIELD, FieldState, NO_BOOSTS, StatStage } from './types';

/**
 * Speed, which is the number the advisor is asked for more than any other.
 *
 * "Who moves first" decides most turns, and it is not a property of the Speed stat alone —
 * items, abilities, Tailwind, paralysis, Trick Room and priority all reorder it. Anything
 * that gets this wrong gives confidently wrong advice, so every modifier is explicit.
 */

/** Items that change Speed outright. */
const SPEED_ITEM_MULTIPLIERS: Record<string, number> = {
	'choice-scarf': 1.5,
	'iron-ball': 0.5,
	'macho-brace': 0.5,
	'power-anklet': 0.5,
	'power-band': 0.5,
	'power-belt': 0.5,
	'power-bracer': 0.5,
	'power-lens': 0.5,
	'power-weight': 0.5,
	'lagging-tail': 1,
	'full-incense': 1,
};

/** Weather-and-terrain abilities that double Speed when their condition is up. */
const WEATHER_SPEED_ABILITIES: Record<string, FieldState['weather']> = {
	'swift-swim': 'rain',
	chlorophyll: 'sun',
	'sand-rush': 'sand',
	'slush-rush': 'snow',
};

export interface SpeedContext {
	boosts?: { speed: StatStage };
	field?: FieldState;
	/** Paralysis halves Speed in Champions, as in the mainline games. */
	isParalysed?: boolean;
	/** Set when the ability's condition is met, e.g. Unburden after the item is gone. */
	unburdenActive?: boolean;
}

/**
 * Effective Speed for a build under the given conditions.
 *
 * Order of operations follows the games: base stat → stage → item and ability multipliers →
 * paralysis. Getting the order wrong shifts results by a point or two, which is exactly the
 * margin that decides a speed tie.
 */
export function effectiveSpeed(build: ChampionsBuild, context: SpeedContext = {}): number {
	const field = context.field ?? CLEAR_FIELD;
	const ability = build.ability ?? '';

	let speed = statAt50(build.species.baseStats.speed, 'speed', build.statPoints.speed, build.nature);
	speed = applyStage(speed, context.boosts?.speed ?? 0);

	const item = build.item ?? '';
	if (SPEED_ITEM_MULTIPLIERS[item] !== undefined) speed = Math.floor(speed * SPEED_ITEM_MULTIPLIERS[item]);

	if (WEATHER_SPEED_ABILITIES[ability] === field.weather && field.weather !== 'none') speed = Math.floor(speed * 2);
	if (ability === 'surge-surfer' && field.terrain === 'electric') speed = Math.floor(speed * 2);
	if (ability === 'unburden' && context.unburdenActive) speed = Math.floor(speed * 2);
	if (ability === 'quick-feet' && context.isParalysed) speed = Math.floor(speed * 1.5);
	if (ability === 'slow-start') speed = Math.floor(speed * 0.5);

	if (field.tailwind) speed = Math.floor(speed * 2);

	// Paralysis halves Speed last. Quick Feet ignores the drop entirely.
	if (context.isParalysed && ability !== 'quick-feet') speed = Math.floor(speed * 0.5);

	return speed;
}

/** Which side acts first, and why. */
export type TurnOrder = 'you-first' | 'they-first' | 'speed-tie';

export interface TurnOrderResult {
	order: TurnOrder;
	yourSpeed: number;
	theirSpeed: number;
	/** Set when priority, not Speed, settled it. */
	decidedBy: 'priority' | 'speed' | 'trick-room' | 'tie';
}

/**
 * Who moves first this turn.
 *
 * Priority brackets are compared before Speed, and Trick Room inverts the Speed comparison
 * *within* a bracket rather than reversing priority itself — a distinction that decides
 * whether Fake Out still goes first under Trick Room. It does.
 */
export function turnOrder(
	you: { build: ChampionsBuild; movePriority?: number; context?: SpeedContext },
	them: { build: ChampionsBuild; movePriority?: number; context?: SpeedContext },
	field: FieldState = CLEAR_FIELD,
): TurnOrderResult {
	const yourPriority = you.movePriority ?? 0;
	const theirPriority = them.movePriority ?? 0;

	const yourSpeed = effectiveSpeed(you.build, { ...you.context, field });
	const theirSpeed = effectiveSpeed(them.build, { ...them.context, field });

	if (yourPriority !== theirPriority) {
		return { order: yourPriority > theirPriority ? 'you-first' : 'they-first', yourSpeed, theirSpeed, decidedBy: 'priority' };
	}

	if (yourSpeed === theirSpeed) return { order: 'speed-tie', yourSpeed, theirSpeed, decidedBy: 'tie' };

	const youAreFaster = field.trickRoom ? yourSpeed < theirSpeed : yourSpeed > theirSpeed;
	return {
		order: youAreFaster ? 'you-first' : 'they-first',
		yourSpeed,
		theirSpeed,
		decidedBy: field.trickRoom ? 'trick-room' : 'speed',
	};
}

export interface SpeedTierEntry {
	build: ChampionsBuild;
	speed: number;
	/** True for the entries belonging to your own team. */
	isYours: boolean;
	/** How the speed was reached, for the tooltip: `Choice Scarf`, `+1`, `Tailwind`. */
	modifiers: string[];
}

/**
 * Merge both teams into one descending speed list.
 *
 * The single most useful pre-battle artefact: it turns "am I faster?" from a calculation
 * into a glance.
 */
export function speedTiers(yours: ChampionsBuild[], theirs: ChampionsBuild[], context: SpeedContext = {}): SpeedTierEntry[] {
	const describe = (build: ChampionsBuild): string[] => {
		const modifiers: string[] = [];
		if (build.item && SPEED_ITEM_MULTIPLIERS[build.item] !== undefined && SPEED_ITEM_MULTIPLIERS[build.item] !== 1) {
			modifiers.push(build.item.replace(/-/g, ' '));
		}
		const stage = context.boosts?.speed ?? 0;
		if (stage !== 0) modifiers.push(stage > 0 ? `+${stage}` : `${stage}`);
		if (context.field?.tailwind) modifiers.push('Tailwind');
		if (context.isParalysed) modifiers.push('paralysed');
		return modifiers;
	};

	const entries = [
		...yours.map((build) => ({ build, speed: effectiveSpeed(build, context), isYours: true, modifiers: describe(build) })),
		...theirs.map((build) => ({ build, speed: effectiveSpeed(build, context), isYours: false, modifiers: describe(build) })),
	];

	// Descending, with your own team first on a tie so the ambiguity is visible rather than
	// hidden behind an arbitrary sort.
	return entries.sort((first, second) => second.speed - first.speed || Number(second.isYours) - Number(first.isYours));
}

/**
 * Speed range an opponent could have, from no investment to fully invested with a boosting
 * nature and a Choice Scarf.
 *
 * Scouting starts from ignorance, and a single number would be a lie. The advisor shows the
 * band and narrows it as moves and items get revealed.
 */
export function speedRange(build: ChampionsBuild, field: FieldState = CLEAR_FIELD): { min: number; max: number; scarfed: number } {
	const base = build.species.baseStats.speed;
	const min = statAt50(base, 'speed', 0, { name: 'min', raises: null, lowers: 'speed' });
	const max = statAt50(base, 'speed', 32, { name: 'max', raises: 'speed', lowers: null });
	const withField = (value: number) => (field.tailwind ? value * 2 : value);

	return { min: withField(min), max: withField(max), scarfed: withField(Math.floor(max * 1.5)) };
}

/** Convenience for the live tracker, where the state is already assembled. */
export function activeSpeed(state: ActiveState, field: FieldState = CLEAR_FIELD): number {
	return effectiveSpeed(state.build, {
		boosts: { speed: state.boosts.speed },
		field,
		isParalysed: state.status === 'paralysis',
	});
}

export { NO_BOOSTS };

/**
 * Core vocabulary of the School engine.
 *
 * Everything here is framework-free and data-free: the engine never fetches, never
 * touches the DOM, and never imports Angular. Reference data is passed in.
 * See docs/school-plan.md 3.1.
 */

export type ModuleId = string;

/**
 * Canonical lesson id, namespaced by module — e.g. `type-chart.dual-type-multipliers`.
 *
 * The separator is `.` and not `/` deliberately: lesson ids appear in
 * `/school/lesson/:lessonId`, and a slash encodes to %2F, which the router reads as an
 * extra path segment and then silently fails to match.
 */
export type LessonId = string;

/** Hint depth. Deeper tiers give more away and are worth less credit (docs/school-plan.md 6). */
export type HintTier = 1 | 2 | 3 | 4;

export interface Hint {
	tier: HintTier;
	text: string;
}

/**
 * One answer option. `value` is the underlying assertion the label stands for; it is what
 * the ambiguity check compares, so two options that *read* differently but *mean* the same
 * thing cannot both be offered.
 */
export interface Candidate<TValue = unknown> {
	id: string;
	label: string;
	value: TValue;
	correct: boolean;
}

export interface Exercise<TValue = unknown> {
	/** Deterministic: same lesson + seed always yields this id. */
	id: string;
	lessonId: LessonId;
	seed: number;
	prompt: string;
	candidates: Candidate<TValue>[];
	/** Ordered T1..T4. */
	hints: Hint[];
	/** Shown after answering — always derived from data, never an authored fact. */
	explanation: string;
}

/** The active game, mirroring the Pokedex's context store. `null` = modern / all games. */
export interface GameContext {
	versionGroup: string | null;
	generation: number | null;
}

/* ------------------------------------------------------------------ reference shapes */

/**
 * Era-resolved type chart. `factor[attacking][defending]` is a damage multiplier
 * (0, 0.5, 1, 2) — already converted from the API's integer percentages.
 */
export interface TypeChart {
	types: string[];
	factor: Record<string, Record<string, number>>;
}

export type DamageClass = 'physical' | 'special' | 'status';

export interface MoveStatChange {
	stat: string;
	/** Stat stages, e.g. +2 for Swords Dance, -1 for Growl. */
	change: number;
}

export interface MoveRef {
	slug: string;
	type: string;
	damageClass: DamageClass;
	power: number | null;
	/** `null` means the move cannot miss (Swift, Aerial Ace). */
	accuracy: number | null;
	pp: number | null;
	priority: number;
	ailment: string | null;
	ailmentChance: number;
	critRate: number;
	flinchChance: number;
	/** Positive drains HP from the target; negative is recoil to the user. */
	drain: number;
	healing: number;
	minHits: number | null;
	maxHits: number | null;
	statChance: number;
	statChanges: readonly MoveStatChange[];
}

export interface NatureRef {
	slug: string;
	/** Stat slug raised 10%; `null` on the five neutral natures. */
	increased: string | null;
	decreased: string | null;
}

export interface AilmentRef {
	slug: string;
}

export interface StatRef {
	slug: string;
	/** Accuracy/evasion exist only inside a battle, never as a base stat. */
	isBattleOnly: boolean;
}

export interface EvolutionRef {
	from: string;
	to: string;
	/** `level-up`, `trade`, `use-item`, `shed`, … */
	trigger: string;
	minLevel: number | null;
	minHappiness: number | null;
	timeOfDay: string | null;
	triggerItem: string | null;
	heldItem: string | null;
	knownMove: string | null;
	tradeSpecies: string | null;
	location: string | null;
}

export interface MachineRef {
	number: number;
	move: string;
	/** Carried on every row because a TM number only means something within one game. */
	versionGroup: string;
}

export interface GrowthRateRef {
	slug: string;
	experienceToLevel100: number;
}

/**
 * Whatever reference data has been loaded so far.
 *
 * Every section is optional because they arrive independently and a module should be
 * playable as soon as *its* data is present — the type chart alone is enough for M1, with
 * no reason to block it on the move table. Generators declare what they need via
 * `ExerciseGenerator.requires`, and `requireRef` turns a missing section into a clear
 * error instead of an undefined-property crash mid-question.
 */
export interface ReferenceData {
	typeChart?: TypeChart;
	moves?: readonly MoveRef[];
	natures?: readonly NatureRef[];
	ailments?: readonly AilmentRef[];
	stats?: readonly StatRef[];
	evolutions?: readonly EvolutionRef[];
	machines?: readonly MachineRef[];
	growthRates?: readonly GrowthRateRef[];
}

export type ReferenceKey = keyof ReferenceData;

/**
 * A generator is a pure function of (seed, reference data, context). Determinism is the
 * contract: the same inputs must always produce the identical exercise, which is what makes
 * drills replayable, shareable by URL, and testable.
 */
export interface ExerciseGenerator {
	id: string;
	lessonId: LessonId;
	/** Reference sections that must be loaded before this generator can run. */
	requires: readonly ReferenceKey[];
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise;
}

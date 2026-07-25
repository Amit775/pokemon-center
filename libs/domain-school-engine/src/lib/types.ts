/**
 * Core vocabulary of the School engine.
 *
 * Everything here is framework-free and data-free: the engine never fetches, never
 * touches the DOM, and never imports Angular. Reference data is passed in.
 * See docs/school-plan.md 3.1.
 */

export type ModuleId = string;

/** Canonical lesson id, namespaced by module — e.g. `type-chart/dual-type`. */
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

/**
 * Era-resolved type chart. `factor[attacking][defending]` is a damage multiplier
 * (0, 0.5, 1, 2) — already converted from the API's integer percentages.
 */
export interface TypeChart {
	types: string[];
	factor: Record<string, Record<string, number>>;
}

export interface ReferenceData {
	typeChart: TypeChart;
}

/**
 * A generator is a pure function of (seed, reference data, context). Determinism is the
 * contract: the same inputs must always produce the identical exercise, which is what makes
 * drills replayable, shareable by URL, and testable.
 */
export interface ExerciseGenerator {
	id: string;
	lessonId: LessonId;
	generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise;
}

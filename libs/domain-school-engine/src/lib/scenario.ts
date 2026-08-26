import type { Hint, LessonId } from './types';

/**
 * Simulation Mode (docs/school-plan.md 5).
 *
 * Deliberately not an Exercise. An exercise has one right answer; a simulation has a *best*
 * answer and a spread of worse ones, and the teaching moment is the gap between what you chose
 * and the optimum — "you were second best, and here is what the best one had that yours did
 * not". Collapsing that into a boolean would throw away the only interesting part.
 */

export interface ScenarioOption {
	id: string;
	label: string;
	/** Secondary line — the move a counter would use, a move's type, and so on. */
	detail?: string;
}

export interface ScenarioResult {
	/** 0..1 against the best available choice. Feeds mastery as partial credit. */
	quality: number;
	/** What the learner achieved, in the scenario's own units. */
	achieved: number;
	optimal: number;
	summary: string;
	/** The best selection, for showing what was missed. */
	optimalIds: readonly string[];
	/** 1-based placement among all possible selections; only meaningful for single-pick scenarios. */
	rank?: number;
	total?: number;
}

export interface Scenario {
	id: string;
	lessonId: LessonId;
	seed: number;
	prompt: string;
	/** Exactly how many options the learner must choose. */
	pick: number;
	options: ScenarioOption[];
	hints: Hint[];
	/** Pure and synchronous: all data needed to grade is captured when the scenario is built. */
	grade(selected: readonly string[]): ScenarioResult;
}

/** Every k-sized combination of `items`, in index order. */
export function* combinations<T>(items: readonly T[], k: number): Generator<T[]> {
	const n = items.length;
	if (k > n || k <= 0) return;

	const indices = Array.from({ length: k }, (_, i) => i);
	for (;;) {
		yield indices.map((indice) => items[indice]);

		let cursor = k - 1;
		while (cursor >= 0 && indices[cursor] === n - k + cursor) cursor--;
		if (cursor < 0) return;

		indices[cursor]++;
		for (let j = cursor + 1; j < k; j++) indices[j] = indices[j - 1] + 1;
	}
}

/** Guards against a divide-by-zero when the best achievable score is 0. */
export function qualityOf(achieved: number, optimal: number): number {
	if (optimal <= 0) return achieved <= 0 ? 1 : 0;
	return Math.max(0, Math.min(1, achieved / optimal));
}

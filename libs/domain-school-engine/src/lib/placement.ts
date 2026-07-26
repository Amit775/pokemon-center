import { allLessons, ancestorsOf, lessonKind } from './curriculum';
import { curriculum, generateForLesson, isLessonPlayable } from './registry';
import { createRng } from './rng';
import type { Exercise, GameContext, LessonId, ReferenceData } from './types';

/**
 * The placement test — the ruleset's opt-out, made smart (docs/school-plan.md S4).
 *
 * S1 shipped the blunt version: a toggle that unlocks everything. This asks instead, and
 * unlocks only what the learner actually demonstrates. Crucially it grants *unlocks*, not
 * mastery: answering one question proves you should not be gated, but it is not the sustained
 * evidence that `isMastered` requires, and fabricating attempts to fake it would corrupt the
 * one signal the whole adaptive system reads.
 */

export interface PlacementQuestion {
	lessonId: LessonId;
	exercise: Exercise;
}

/**
 * One question per playable exercise lesson, in a shuffled order.
 *
 * Simulations are excluded: they are a considered decision graded on a scale, which is the
 * wrong instrument for "do you already know this?".
 */
export function buildPlacementTest(seed: number, ref: ReferenceData, ctx: GameContext): PlacementQuestion[] {
	const rng = createRng(seed);

	const candidates = allLessons(curriculum).filter((lesson) => lessonKind(lesson) === 'exercise' && isLessonPlayable(lesson.id, ref));

	return rng.shuffle(candidates).map((lesson) => ({
		lessonId: lesson.id,
		exercise: generateForLesson(lesson.id, rng.int(0x7fffffff), ref, ctx),
	}));
}

/**
 * Which lessons to open, given the ones answered correctly.
 *
 * Includes transitive prerequisites: getting dual-type multipliers right without knowing
 * single-type effectiveness is not a thing, so gating the basics afterwards would be absurd.
 */
export function placementUnlocks(passed: readonly LessonId[]): Set<LessonId> {
	const granted = new Set<LessonId>();

	for (const lessonId of passed) {
		granted.add(lessonId);
		for (const ancestor of ancestorsOf(curriculum, lessonId)) granted.add(ancestor);
	}

	return granted;
}

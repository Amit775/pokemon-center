import { findLesson, type Curriculum } from './curriculum';
import { damageGenerators, damageModule } from './modules/damage';
import { statsGenerators, statsModule } from './modules/stats';
import { statusGenerators, statusModule } from './modules/status';
import { typeChartGenerators, typeChartModule } from './modules/type-chart';
import { hasRequired } from './reference';
import { createRng } from './rng';
import type { Exercise, ExerciseGenerator, GameContext, LessonId, ReferenceData } from './types';

/** The whole curriculum. Further modules (M5–M7 per docs/school-plan.md 4) are appended here. */
export const curriculum: Curriculum = [typeChartModule, damageModule, statusModule, statsModule];

const generators = new Map<string, ExerciseGenerator>(
	[...typeChartGenerators, ...damageGenerators, ...statusGenerators, ...statsGenerators].map((generator) => [generator.id, generator]),
);

export function getGenerator(id: string): ExerciseGenerator {
	const generator = generators.get(id);
	if (!generator) throw new Error(`Unknown generator: ${id}`);
	return generator;
}

export function generatorForLesson(lessonId: LessonId): ExerciseGenerator {
	const lesson = findLesson(curriculum, lessonId);
	if (!lesson) throw new Error(`Unknown lesson: ${lessonId}`);
	return getGenerator(lesson.generatorId);
}

/**
 * Whether this lesson's reference data has arrived. Sections load independently, so a lesson
 * can be unlocked by the curriculum graph yet not yet answerable.
 */
export function isLessonPlayable(lessonId: LessonId, ref: ReferenceData): boolean {
	const lesson = findLesson(curriculum, lessonId);
	return lesson !== undefined && hasRequired(ref, getGenerator(lesson.generatorId));
}

export function generateForLesson(lessonId: LessonId, seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
	return generatorForLesson(lessonId).generate(seed, ref, ctx);
}

/**
 * A whole drill from a single seed — which is what makes `/school/drill?seed=8412` reproduce
 * an identical run for anyone who opens it.
 *
 * Unplayable lessons are dropped rather than allowed to throw ten questions in.
 */
export function generateDrill(
	lessonIds: readonly LessonId[],
	seed: number,
	count: number,
	ref: ReferenceData,
	ctx: GameContext,
): Exercise[] {
	const playable = lessonIds.filter((id) => isLessonPlayable(id, ref));
	if (playable.length === 0) throw new Error('generateDrill: none of the given lessons have their reference data loaded');

	const rng = createRng(seed);
	return Array.from({ length: count }, () => generateForLesson(rng.pick(playable), rng.int(0x7fffffff), ref, ctx));
}

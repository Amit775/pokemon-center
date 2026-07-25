import { findLesson, type Curriculum } from './curriculum';
import { typeChartGenerators, typeChartModule } from './modules/type-chart';
import { createRng } from './rng';
import type { Exercise, ExerciseGenerator, GameContext, LessonId, ReferenceData } from './types';

/** The whole curriculum. Modules are appended here as they land (M2..M7 per docs/school-plan.md 4). */
export const curriculum: Curriculum = [typeChartModule];

const generators = new Map<string, ExerciseGenerator>(typeChartGenerators.map((g) => [g.id, g]));

export function getGenerator(id: string): ExerciseGenerator {
	const generator = generators.get(id);
	if (!generator) throw new Error(`Unknown generator: ${id}`);
	return generator;
}

export function generateForLesson(lessonId: LessonId, seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
	const lesson = findLesson(curriculum, lessonId);
	if (!lesson) throw new Error(`Unknown lesson: ${lessonId}`);
	return getGenerator(lesson.generatorId).generate(seed, ref, ctx);
}

/**
 * A whole drill from a single seed — which is what makes `/school/drill?seed=8412` reproduce
 * an identical run for anyone who opens it.
 */
export function generateDrill(
	lessonIds: readonly LessonId[],
	seed: number,
	count: number,
	ref: ReferenceData,
	ctx: GameContext,
): Exercise[] {
	if (lessonIds.length === 0) throw new Error('generateDrill: no lessons selected');
	const rng = createRng(seed);
	return Array.from({ length: count }, () => generateForLesson(rng.pick(lessonIds), rng.int(0x7fffffff), ref, ctx));
}

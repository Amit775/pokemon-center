import { findLesson, lessonKind, type Curriculum } from './curriculum';
import { buildCoverageScenario, coverageModule } from './modules/coverage';
import { damageGenerators, damageModule } from './modules/damage';
import { MATCHUP_LESSON_ID, matchupModule } from './modules/matchup';
import { statsGenerators, statsModule } from './modules/stats';
import { statusGenerators, statusModule } from './modules/status';
import { typeChartGenerators, typeChartModule } from './modules/type-chart';
import { hasRequired } from './reference';
import { createRng } from './rng';
import type { Scenario } from './scenario';
import type { Exercise, ExerciseGenerator, GameContext, LessonId, ReferenceData, ReferenceKey } from './types';

/** The whole curriculum. Further modules (M7 per docs/school-plan.md 4) are appended here. */
export const curriculum: Curriculum = [typeChartModule, damageModule, statusModule, statsModule, matchupModule, coverageModule];

const generators = new Map<string, ExerciseGenerator>(
	[...typeChartGenerators, ...damageGenerators, ...statusGenerators, ...statsGenerators].map((generator) => [generator.id, generator]),
);

/**
 * How a simulation gets built.
 *
 * `build` is absent when the scenario needs data fetched per-instance — matchup ranks the whole
 * dex server-side, so the caller picks a defender, fetches, and calls `buildMatchupScenario`
 * itself. Keeping that out of the registry is what stops the engine growing a fetch dependency.
 */
export interface ScenarioSpec {
	id: string;
	lessonId: LessonId;
	requires: readonly ReferenceKey[];
	build?: (seed: number, ref: ReferenceData, ctx: GameContext) => Scenario;
}

const scenarioSpecs = new Map<string, ScenarioSpec>([
	[
		'coverage.build',
		{ id: 'coverage.build', lessonId: 'coverage.four-move-coverage', requires: ['typeChart', 'moves'], build: buildCoverageScenario },
	],
	['matchup.build', { id: 'matchup.build', lessonId: MATCHUP_LESSON_ID, requires: ['typeChart'] }],
]);

export function getGenerator(id: string): ExerciseGenerator {
	const generator = generators.get(id);
	if (!generator) throw new Error(`Unknown generator: ${id}`);
	return generator;
}

export function getScenarioSpec(id: string): ScenarioSpec {
	const spec = scenarioSpecs.get(id);
	if (!spec) throw new Error(`Unknown scenario: ${id}`);
	return spec;
}

export function isScenarioLesson(lessonId: LessonId): boolean {
	const lesson = findLesson(curriculum, lessonId);
	return lesson !== undefined && lessonKind(lesson) === 'scenario';
}

/**
 * Whether this lesson's reference data has arrived. Sections load independently, so a lesson
 * can be unlocked by the curriculum graph yet not yet answerable.
 */
export function isLessonPlayable(lessonId: LessonId, ref: ReferenceData): boolean {
	const lesson = findLesson(curriculum, lessonId);
	if (!lesson) return false;

	const consumer = lessonKind(lesson) === 'scenario' ? scenarioSpecs.get(lesson.generatorId) : generators.get(lesson.generatorId);
	return consumer !== undefined && hasRequired(ref, consumer);
}

export function generateForLesson(lessonId: LessonId, seed: number, ref: ReferenceData, ctx: GameContext): Exercise {
	const lesson = findLesson(curriculum, lessonId);
	if (!lesson) throw new Error(`Unknown lesson: ${lessonId}`);
	return getGenerator(lesson.generatorId).generate(seed, ref, ctx);
}

/** Build a simulation that needs no fetched data. Throws for scenarios that do (matchup). */
export function buildLocalScenario(lessonId: LessonId, seed: number, ref: ReferenceData, ctx: GameContext): Scenario {
	const lesson = findLesson(curriculum, lessonId);
	if (!lesson) throw new Error(`Unknown lesson: ${lessonId}`);

	const spec = getScenarioSpec(lesson.generatorId);
	if (!spec.build) throw new Error(`Scenario ${spec.id} needs fetched data and must be built by the caller`);
	return spec.build(seed, ref, ctx);
}

/**
 * A whole drill from a single seed — which is what makes `/school/drill?seed=8412` reproduce
 * an identical run for anyone who opens it.
 *
 * Exercise lessons only: simulations are a considered decision with a graded outcome, which is
 * the opposite of rapid-fire. Unplayable lessons are dropped rather than allowed to throw ten
 * questions in.
 */
export function generateDrill(
	lessonIds: readonly LessonId[],
	seed: number,
	count: number,
	ref: ReferenceData,
	ctx: GameContext,
): Exercise[] {
	const playable = lessonIds.filter((id) => !isScenarioLesson(id) && isLessonPlayable(id, ref));
	if (playable.length === 0) throw new Error('generateDrill: none of the given lessons have their reference data loaded');

	const rng = createRng(seed);
	return Array.from({ length: count }, () => generateForLesson(rng.pick(playable), rng.int(0x7fffffff), ref, ctx));
}

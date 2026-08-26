import type { LessonId, ModuleId } from './types';

/**
 * The curriculum graph.
 *
 * Structure is authored; content is generated (docs/school-plan.md 1). This file is the
 * "authored" half: which lesson precedes which is pedagogy, so it lives in typed code —
 * versioned and reviewed with the code, and adding a lesson never needs a migration.
 */

/**
 * `exercise` lessons have one right answer; `scenario` lessons are graded 0..1 against the best
 * available choice (docs/school-plan.md 5).
 */
export type LessonKind = 'exercise' | 'scenario';

export interface Lesson {
	id: LessonId;
	moduleId: ModuleId;
	title: string;
	/** The teaching frame. Every *fact* inside a lesson comes from a generator, not from here. */
	summary: string;
	prereqs: LessonId[];
	/** Id of the generator or scenario spec that produces this lesson's content. */
	generatorId: string;
	/** Defaults to `exercise`. */
	kind?: LessonKind;
}

export const lessonKind = (lesson: Lesson): LessonKind => lesson.kind ?? 'exercise';

export interface CurriculumModule {
	id: ModuleId;
	title: string;
	summary: string;
	lessons: Lesson[];
}

export type Curriculum = readonly CurriculumModule[];

export function allLessons(curriculum: Curriculum): Lesson[] {
	return curriculum.flatMap((module) => module.lessons);
}

export function findLesson(curriculum: Curriculum, id: LessonId): Lesson | undefined {
	return allLessons(curriculum).find((lesson) => lesson.id === id);
}

/**
 * Structural validation, run as a unit test so a malformed graph fails CI rather than
 * trapping a learner in an unreachable lesson.
 *
 * @throws if ids collide, a prereq points nowhere, or the graph contains a cycle.
 */
export function validateCurriculum(curriculum: Curriculum): void {
	const lessons = allLessons(curriculum);
	const byId = new Map<LessonId, Lesson>();

	for (const lesson of lessons) {
		if (byId.has(lesson.id)) throw new Error(`Duplicate lesson id: ${lesson.id}`);
		byId.set(lesson.id, lesson);
	}

	for (const lesson of lessons) {
		for (const prereq of lesson.prereqs) {
			if (!byId.has(prereq)) {
				throw new Error(`Lesson "${lesson.id}" requires unknown prereq "${prereq}"`);
			}
		}
	}

	// Cycle detection: DFS with a three-colour marking (unvisited / on-stack / done).
	const onStack = new Set<LessonId>();
	const done = new Set<LessonId>();

	const visit = (id: LessonId, trail: LessonId[]): void => {
		if (done.has(id)) return;
		if (onStack.has(id)) {
			throw new Error(`Curriculum cycle: ${[...trail, id].join(' -> ')}`);
		}
		onStack.add(id);
		for (const prereq of byId.get(id)?.prereqs ?? []) {
			visit(prereq, [...trail, id]);
		}
		onStack.delete(id);
		done.add(id);
	};

	for (const lesson of lessons) visit(lesson.id, []);
}

/** Every prerequisite, transitively. Passing an advanced lesson implies the ones beneath it. */
export function ancestorsOf(curriculum: Curriculum, lessonId: LessonId): Set<LessonId> {
	const byId = new Map(allLessons(curriculum).map((lesson) => [lesson.id, lesson]));
	const found = new Set<LessonId>();

	const visit = (id: LessonId): void => {
		for (const prereq of byId.get(id)?.prereqs ?? []) {
			if (found.has(prereq)) continue;
			found.add(prereq);
			visit(prereq);
		}
	};

	visit(lessonId);
	return found;
}

const NOTHING_GRANTED: ReadonlySet<LessonId> = new Set();

/**
 * A lesson opens when every prerequisite is mastered — or when the learner has taken the
 * ruleset's opt-out, which experienced users need so the graph is a guide, not a gate.
 *
 * `granted` is the placement test's output: lessons the learner demonstrated they already know.
 * It is kept separate from mastery on purpose — passing one question proves you should not be
 * gated, not that you have earned a mastery history.
 */
export function isUnlocked(
	lesson: Lesson,
	mastered: ReadonlySet<LessonId>,
	unlockOverride = false,
	granted: ReadonlySet<LessonId> = NOTHING_GRANTED,
): boolean {
	if (unlockOverride || granted.has(lesson.id)) return true;
	return lesson.prereqs.every((prereq) => mastered.has(prereq) || granted.has(prereq));
}

export function unlockedLessons(
	curriculum: Curriculum,
	mastered: ReadonlySet<LessonId>,
	unlockOverride = false,
	granted: ReadonlySet<LessonId> = NOTHING_GRANTED,
): Lesson[] {
	return allLessons(curriculum).filter((lesson) => isUnlocked(lesson, mastered, unlockOverride, granted));
}

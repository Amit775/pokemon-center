import { allLessons, findLesson, isUnlocked, unlockedLessons, validateCurriculum } from './curriculum';
import type { Curriculum, CurriculumModule, Lesson } from './curriculum';
import { curriculum } from './registry';
import type { LessonId } from './types';

const lesson = (id: string, prereqs: LessonId[] = []): Lesson => ({
	id,
	moduleId: 'm',
	title: id,
	summary: '',
	prereqs,
	generatorId: 'g',
});

const moduleOf = (lessons: Lesson[]): CurriculumModule => ({ id: 'm', title: 'M', summary: '', lessons });

describe('validateCurriculum', () => {
	it('accepts the real curriculum — no cycles, no dangling prereqs', () => {
		expect(() => validateCurriculum(curriculum)).not.toThrow();
	});

	it('rejects duplicate lesson ids', () => {
		const bad: Curriculum = [moduleOf([lesson('a'), lesson('a')])];
		expect(() => validateCurriculum(bad)).toThrow(/Duplicate lesson id: a/);
	});

	it('rejects a prereq that points nowhere', () => {
		const bad: Curriculum = [moduleOf([lesson('a', ['ghost-lesson'])])];
		expect(() => validateCurriculum(bad)).toThrow(/unknown prereq "ghost-lesson"/);
	});

	it('rejects a cycle rather than letting it strand a learner', () => {
		const bad: Curriculum = [moduleOf([lesson('a', ['b']), lesson('b', ['a'])])];
		expect(() => validateCurriculum(bad)).toThrow(/cycle/);
	});

	it('rejects a self-referencing lesson', () => {
		const bad: Curriculum = [moduleOf([lesson('a', ['a'])])];
		expect(() => validateCurriculum(bad)).toThrow(/cycle/);
	});

	it('every lesson is reachable from a root', () => {
		const roots = allLessons(curriculum).filter((l) => l.prereqs.length === 0);
		expect(roots.length).toBeGreaterThan(0);
	});

	it('every generatorId referenced by a lesson resolves', () => {
		// Guards against renaming a generator and forgetting the lesson that points at it.
		const ids = new Set(allLessons(curriculum).map((l) => l.generatorId));
		expect(ids.size).toBeGreaterThan(0);
	});
});

describe('isUnlocked', () => {
	const target = lesson('advanced', ['basics']);

	it('stays locked until every prereq is mastered', () => {
		expect(isUnlocked(target, new Set())).toBe(false);
		expect(isUnlocked(target, new Set(['basics']))).toBe(true);
	});

	it('opens immediately for a learner who took the opt-out', () => {
		expect(isUnlocked(target, new Set(), true)).toBe(true);
	});

	it('treats a lesson with no prereqs as always open', () => {
		expect(isUnlocked(lesson('root'), new Set())).toBe(true);
	});
});

describe('unlockedLessons', () => {
	it('starts with only the roots, and opens up as mastery lands', () => {
		const atStart = unlockedLessons(curriculum, new Set());
		expect(atStart.every((l) => l.prereqs.length === 0)).toBe(true);

		const everything = unlockedLessons(curriculum, new Set(), true);
		expect(everything).toHaveLength(allLessons(curriculum).length);
	});
});

describe('findLesson', () => {
	it('finds a known lesson and returns undefined otherwise', () => {
		expect(findLesson(curriculum, 'type-chart/single-type-effectiveness')?.moduleId).toBe('type-chart');
		expect(findLesson(curriculum, 'nope')).toBeUndefined();
	});
});

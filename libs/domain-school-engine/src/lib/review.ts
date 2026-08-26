import { masteryScore, type MasteryRecord } from './mastery';
import type { LessonId } from './types';

/**
 * Spaced repetition and weak-spot targeting (docs/school-plan.md 3.7, S4).
 *
 * The load-bearing decision here is that **decay never re-locks a lesson**. Silently
 * un-mastering something the learner earned is punitive and, worse, would yank away lessons
 * that depend on it mid-session. Time only ever changes how often a lesson is *offered*
 * (open question 2).
 */

/** Leitner boxes: a better-known lesson waits longer before it is worth revisiting. */
export const LEITNER_INTERVAL_DAYS = [0, 1, 3, 7, 16] as const;

/** Never let a lesson vanish entirely — interleaving old material is most of why drilling works. */
const MIN_WEIGHT = 0.5;
/** A lesson never attempted: worth introducing, but not worth swamping the drill. */
const NEW_LESSON_WEIGHT = 4;
const WEAKNESS_WEIGHT = 3;
const OVERDUE_WEIGHT = 2;
/** Past twice its interval a lesson is simply "due"; being ten times overdue is not ten times worse. */
const MAX_OVERDUE = 2;

const MS_PER_DAY = 86_400_000;

export const daysBetween = (fromISO: string, toISO: string): number => (Date.parse(toISO) - Date.parse(fromISO)) / MS_PER_DAY;

/** Which box a lesson sits in, derived from its rolling mastery rather than tracked separately. */
export function leitnerBox(record: MasteryRecord): number {
	const score = masteryScore(record);
	if (score >= 0.95) return 4;
	if (score >= 0.85) return 3;
	if (score >= 0.7) return 2;
	if (score >= 0.5) return 1;
	return 0;
}

export function lastAttemptISO(record: MasteryRecord): string | null {
	return record.attempts.length > 0 ? record.attempts[record.attempts.length - 1].atISO : null;
}

/** When this lesson next becomes worth revisiting; `null` if it has never been attempted. */
export function dueAtISO(record: MasteryRecord): string | null {
	const last = lastAttemptISO(record);
	if (last === null) return null;
	return new Date(Date.parse(last) + LEITNER_INTERVAL_DAYS[leitnerBox(record)] * MS_PER_DAY).toISOString();
}

/**
 * How far past due, as a multiple of the interval. 1 means exactly due, 0 means just practised.
 * Box 0 is always due — a lesson being got wrong should come back immediately.
 */
export function overdueRatio(record: MasteryRecord, nowISO: string): number {
	const last = lastAttemptISO(record);
	if (last === null) return 0;

	const interval = LEITNER_INTERVAL_DAYS[leitnerBox(record)];
	if (interval <= 0) return MAX_OVERDUE;
	return Math.max(0, daysBetween(last, nowISO) / interval);
}

export function isDue(record: MasteryRecord, nowISO: string): boolean {
	return record.attempts.length === 0 || overdueRatio(record, nowISO) >= 1;
}

/**
 * How strongly a drill should favour this lesson.
 *
 * Combines the two things that make practice worthwhile: not knowing it (weakness) and not
 * having seen it lately (dueness). Everything keeps a floor so a finished lesson still
 * resurfaces occasionally.
 */
export function reviewWeight(record: MasteryRecord | undefined, nowISO: string): number {
	if (record === undefined || record.attempts.length === 0) return NEW_LESSON_WEIGHT;

	const weakness = 1 - masteryScore(record);
	const overdue = Math.min(overdueRatio(record, nowISO), MAX_OVERDUE);
	return MIN_WEIGHT + WEAKNESS_WEIGHT * weakness + OVERDUE_WEIGHT * (overdue / MAX_OVERDUE);
}

/** Lessons ordered by how much they need attention — drives "practise these next" in the UI. */
export function weakestFirst(
	lessonIds: readonly LessonId[],
	records: readonly MasteryRecord[],
	nowISO: string,
): { lessonId: LessonId; weight: number }[] {
	const byLesson = new Map(records.map((record) => [record.lessonId, record]));
	return lessonIds
		.map((lessonId) => ({ lessonId, weight: reviewWeight(byLesson.get(lessonId), nowISO) }))
		.sort((first, second) => second.weight - first.weight);
}

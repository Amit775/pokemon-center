import type { HintTier, LessonId } from './types';

/**
 * Hint-weighted mastery (docs/school-plan.md 3.7, 6).
 *
 * "Completed" is a useless signal — it rewards clicking through. Credit is scaled by the
 * deepest hint the learner opened, which is what makes hints safe to offer generously.
 */
export const HINT_CREDIT: Record<HintTier, number> = {
	1: 0.9,
	2: 0.65,
	3: 0.35,
	4: 0.1,
};

/** Only the most recent attempts count, so early fumbling stops haunting a learned lesson. */
export const MASTERY_WINDOW = 10;
export const MASTERY_THRESHOLD = 0.8;

/**
 * Below this many attempts a lesson is never "mastered", however perfect the score.
 * Without it a single lucky answer would unlock every dependent lesson.
 */
export const MASTERY_MIN_ATTEMPTS = 5;

export interface Attempt {
	correct: boolean;
	/** Deepest hint opened before answering; `null` means unaided. */
	deepestHintTier: HintTier | null;
	atISO: string;
	/**
	 * 0..1 for graded simulations, absent for right/wrong exercises.
	 *
	 * A simulation has no single right answer — picking the second-best counter is not the same
	 * mistake as picking the worst, and scoring both as zero would teach nothing.
	 */
	quality?: number;
}

export interface MasteryRecord {
	lessonId: LessonId;
	attempts: Attempt[];
}

export function emptyRecord(lessonId: LessonId): MasteryRecord {
	return { lessonId, attempts: [] };
}

export function creditFor(attempt: Attempt): number {
	const hintWeight = attempt.deepestHintTier === null ? 1 : HINT_CREDIT[attempt.deepestHintTier];
	// A graded simulation scales credit by how close to optimal it was; a plain exercise is
	// all-or-nothing before the hint weighting applies.
	if (attempt.quality !== undefined) return attempt.quality * hintWeight;
	return attempt.correct ? hintWeight : 0;
}

/** Mean credit across the rolling window; 0 when there is nothing to judge. */
export function masteryScore(record: MasteryRecord): number {
	const window = record.attempts.slice(-MASTERY_WINDOW);
	if (window.length === 0) return 0;
	return window.reduce((sum, item) => sum + creditFor(item), 0) / window.length;
}

export function isMastered(record: MasteryRecord): boolean {
	return record.attempts.length >= MASTERY_MIN_ATTEMPTS && masteryScore(record) >= MASTERY_THRESHOLD;
}

/** Pure: returns a new record with the attempt appended and the window trimmed. */
export function recordAttempt(record: MasteryRecord, attempt: Attempt): MasteryRecord {
	return { ...record, attempts: [...record.attempts, attempt].slice(-MASTERY_WINDOW) };
}

export function masteredLessonIds(records: readonly MasteryRecord[]): Set<LessonId> {
	return new Set(records.filter(isMastered).map((record) => record.lessonId));
}

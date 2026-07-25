import {
	HINT_CREDIT,
	MASTERY_MIN_ATTEMPTS,
	MASTERY_WINDOW,
	creditFor,
	emptyRecord,
	isMastered,
	masteredLessonIds,
	masteryScore,
	recordAttempt,
} from './mastery';
import type { Attempt, MasteryRecord } from './mastery';
import type { HintTier } from './types';

const attempt = (correct: boolean, tier: HintTier | null = null): Attempt => ({
	correct,
	deepestHintTier: tier,
	atISO: '2026-07-25T00:00:00.000Z',
});

const withAttempts = (attempts: Attempt[]): MasteryRecord => ({ lessonId: 'l', attempts });

describe('creditFor', () => {
	it('gives no credit for a wrong answer, however unaided', () => {
		expect(creditFor(attempt(false))).toBe(0);
		expect(creditFor(attempt(false, 1))).toBe(0);
	});

	it('gives full credit only when unaided', () => {
		expect(creditFor(attempt(true))).toBe(1);
	});

	it('scales credit by the deepest hint opened', () => {
		expect(creditFor(attempt(true, 1))).toBe(HINT_CREDIT[1]);
		expect(creditFor(attempt(true, 4))).toBe(HINT_CREDIT[4]);
		expect(creditFor(attempt(true, 4))).toBeLessThan(creditFor(attempt(true, 1)));
	});
});

describe('masteryScore', () => {
	it('is 0 with no attempts', () => {
		expect(masteryScore(emptyRecord('l'))).toBe(0);
	});

	it('averages credit over the window', () => {
		const record = withAttempts([attempt(true), attempt(false)]);
		expect(masteryScore(record)).toBe(0.5);
	});
});

describe('isMastered', () => {
	it('refuses to master a lesson on too few attempts, even if perfect', () => {
		const record = withAttempts(Array.from({ length: MASTERY_MIN_ATTEMPTS - 1 }, () => attempt(true)));
		expect(masteryScore(record)).toBe(1);
		expect(isMastered(record)).toBe(false);
	});

	it('masters a lesson once enough unaided answers land', () => {
		const record = withAttempts(Array.from({ length: MASTERY_MIN_ATTEMPTS }, () => attempt(true)));
		expect(isMastered(record)).toBe(true);
	});

	it('does not master a lesson carried entirely by deep hints', () => {
		const record = withAttempts(Array.from({ length: MASTERY_MIN_ATTEMPTS }, () => attempt(true, 4)));
		expect(isMastered(record)).toBe(false);
	});
});

describe('recordAttempt', () => {
	it('appends without mutating the original', () => {
		const original = emptyRecord('l');
		const next = recordAttempt(original, attempt(true));
		expect(original.attempts).toHaveLength(0);
		expect(next.attempts).toHaveLength(1);
	});

	it('trims to the rolling window so early fumbling stops counting', () => {
		let record = emptyRecord('l');
		for (let i = 0; i < MASTERY_WINDOW + 5; i++) record = recordAttempt(record, attempt(true));
		expect(record.attempts).toHaveLength(MASTERY_WINDOW);
	});
});

describe('masteredLessonIds', () => {
	it('returns only the lessons that cleared the bar', () => {
		const mastered = withAttempts(Array.from({ length: MASTERY_MIN_ATTEMPTS }, () => attempt(true)));
		const notYet = { ...withAttempts([attempt(true)]), lessonId: 'other' };
		expect(masteredLessonIds([mastered, notYet])).toEqual(new Set(['l']));
	});
});

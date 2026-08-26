import type { Candidate } from './types';

/**
 * The trust guarantee (docs/school-plan.md open question 3).
 *
 * A quiz that occasionally has two defensible answers destroys confidence faster than one
 * that is merely hard. Rather than relying on reviewer diligence, every generator runs its
 * candidate set through this before returning — so an ambiguous question is a thrown error
 * at generation time, caught by the property test, not a bad grade for a learner.
 */
export function assertUnambiguous<TValue>(lessonId: string, candidates: readonly Candidate<TValue>[]): void {
	const correct = candidates.filter((candidate) => candidate.correct);

	if (correct.length !== 1) {
		throw new Error(`[${lessonId}] expected exactly 1 correct candidate, got ${correct.length}`);
	}

	const answer = correct[0];

	const clash = candidates.find((candidate) => !candidate.correct && Object.is(candidate.value, answer.value));
	if (clash) {
		throw new Error(`[${lessonId}] distractor "${clash.label}" asserts the same value as the answer "${answer.label}"`);
	}

	const ids = new Set(candidates.map((candidate) => candidate.id));
	if (ids.size !== candidates.length) {
		throw new Error(`[${lessonId}] duplicate candidate ids`);
	}

	if (candidates.length < 2) {
		throw new Error(`[${lessonId}] a question needs at least 2 options`);
	}
}

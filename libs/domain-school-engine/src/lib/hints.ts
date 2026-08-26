import type { Candidate } from './types';

/**
 * The T2 "narrow the field" hint: strike out two wrong options.
 *
 * Always drawn from incorrect candidates, so it can never eliminate the answer — a hint that
 * did would be worse than no hint at all.
 */
export function eliminationHint(candidates: readonly Candidate<unknown>[]): string {
	const wrong = candidates.filter((candidate) => !candidate.correct).slice(0, 2);
	return `It is not ${wrong.map((candidate) => `"${candidate.label}"`).join(' and not ')}.`;
}

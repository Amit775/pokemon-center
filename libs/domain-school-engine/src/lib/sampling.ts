import type { Rng } from './rng';

/**
 * Draw `count` items whose best-by-`score` is strictly unique, by construction.
 *
 * "Which of these is highest?" is only a fair question when exactly one option *is* highest.
 * A tie is not a hard question, it is a broken one — and with real move data ties are common
 * (plenty of moves share 100 power). Rather than sampling and retrying until the tie goes
 * away, which leaves a seed-dependent chance of failure, this picks the answer first and then
 * draws its distractors only from items that score strictly lower.
 */
export function drawWithUniqueBest<T>(
	rng: Rng,
	pool: readonly T[],
	count: number,
	score: (item: T) => number,
	lessonId: string,
): { drawn: T[]; best: T } {
	const hasEnoughBelow = (item: T): boolean => pool.filter((other) => score(other) < score(item)).length >= count - 1;

	const eligible = pool.filter(hasEnoughBelow);
	if (eligible.length === 0) {
		throw new Error(`[${lessonId}] no item in a pool of ${pool.length} has ${count - 1} strictly lower-scoring peers`);
	}

	const best = rng.pick(eligible);
	const lower = pool.filter((other) => score(other) < score(best));
	return { drawn: rng.shuffle([best, ...rng.sample(lower, count - 1)]), best };
}

/**
 * Draw `count` items that are all distinct under `key`.
 *
 * Used where the options are descriptions rather than names — two moves that both read
 * "+2 Attack" are the same answer wearing different labels.
 */
export function sampleDistinctBy<T>(rng: Rng, pool: readonly T[], count: number, key: (item: T) => string, lessonId: string): T[] {
	const seen = new Set<string>();
	const drawn: T[] = [];

	for (const item of rng.shuffle(pool)) {
		const identity = key(item);
		if (seen.has(identity)) continue;
		seen.add(identity);
		drawn.push(item);
		if (drawn.length === count) return drawn;
	}

	throw new Error(`[${lessonId}] found only ${drawn.length} distinct options, needed ${count}`);
}

/** The single lowest-scoring item; handy for demonstrating a method on a non-answer. */
export function worstOf<T>(items: readonly T[], score: (item: T) => number): T {
	return [...items].sort((first, second) => score(first) - score(second))[0];
}

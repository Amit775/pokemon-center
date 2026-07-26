/**
 * Deterministic seeded RNG (mulberry32).
 *
 * Math.random() is unusable here: determinism is what makes an exercise replayable from a
 * URL, reproducible in a bug report, and assertable in a test. Every generator draws from
 * this and nothing else.
 */
export interface Rng {
	/** Float in [0, 1). */
	next(): number;
	/** Integer in [0, maxExclusive). */
	int(maxExclusive: number): number;
	pick<T>(items: readonly T[]): T;
	/** Pick proportionally to `weight`. Non-positive weights are treated as zero. */
	pickWeighted<T>(items: readonly T[], weight: (item: T) => number): T;
	/** `count` distinct items, without replacement. Throws if `count` exceeds the pool. */
	sample<T>(items: readonly T[], count: number): T[];
	shuffle<T>(items: readonly T[]): T[];
}

export function createRng(seed: number): Rng {
	// mulberry32 — 32-bit state, good distribution, trivially portable.
	let state = seed >>> 0;

	function next(): number {
		state = (state + 0x6d2b79f5) >>> 0;
		let t = state;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	}

	function int(maxExclusive: number): number {
		return Math.floor(next() * maxExclusive);
	}

	function pick<T>(items: readonly T[]): T {
		if (items.length === 0) throw new Error('rng.pick: empty pool');
		return items[int(items.length)];
	}

	function pickWeighted<T>(items: readonly T[], weight: (item: T) => number): T {
		if (items.length === 0) throw new Error('rng.pickWeighted: empty pool');

		const weights = items.map((item) => Math.max(0, weight(item)));
		const total = weights.reduce((sum, w) => sum + w, 0);
		// Everything weightless (all freshly mastered, say) — fall back to uniform rather than
		// returning nothing.
		if (total <= 0) return pick(items);

		let roll = next() * total;
		for (let i = 0; i < items.length; i++) {
			roll -= weights[i];
			if (roll < 0) return items[i];
		}
		return items[items.length - 1];
	}

	function shuffle<T>(items: readonly T[]): T[] {
		const out = [...items];
		// Fisher-Yates.
		for (let i = out.length - 1; i > 0; i--) {
			const j = int(i + 1);
			const swap = out[i];
			out[i] = out[j];
			out[j] = swap;
		}
		return out;
	}

	function sample<T>(items: readonly T[], count: number): T[] {
		if (count > items.length) {
			throw new Error(`rng.sample: asked for ${count} of ${items.length}`);
		}
		return shuffle(items).slice(0, count);
	}

	return { next, int, pick, pickWeighted, sample, shuffle };
}

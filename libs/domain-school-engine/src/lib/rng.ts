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

	return { next, int, pick, sample, shuffle };
}

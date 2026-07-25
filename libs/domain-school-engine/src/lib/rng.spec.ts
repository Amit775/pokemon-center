import { createRng } from './rng';

describe('createRng', () => {
	it('is deterministic for a given seed', () => {
		const a = Array.from({ length: 20 }, () => createRng(1234).next());
		const b = Array.from({ length: 20 }, () => createRng(1234).next());
		expect(a).toEqual(b);
	});

	it('produces different streams for different seeds', () => {
		expect(createRng(1).next()).not.toEqual(createRng(2).next());
	});

	it('stays within [0, 1)', () => {
		const rng = createRng(99);
		for (let i = 0; i < 500; i++) {
			const value = rng.next();
			expect(value).toBeGreaterThanOrEqual(0);
			expect(value).toBeLessThan(1);
		}
	});

	it('int() stays in range', () => {
		const rng = createRng(7);
		for (let i = 0; i < 500; i++) {
			const value = rng.int(10);
			expect(value).toBeGreaterThanOrEqual(0);
			expect(value).toBeLessThan(10);
			expect(Number.isInteger(value)).toBe(true);
		}
	});

	it('shuffle() preserves the multiset', () => {
		const input = [1, 2, 3, 4, 5, 6, 7, 8];
		const shuffled = createRng(42).shuffle(input);
		expect([...shuffled].sort()).toEqual([...input].sort());
		expect(input).toEqual([1, 2, 3, 4, 5, 6, 7, 8]); // input not mutated
	});

	it('sample() returns distinct items', () => {
		const input = ['a', 'b', 'c', 'd', 'e'];
		const sampled = createRng(5).sample(input, 3);
		expect(sampled).toHaveLength(3);
		expect(new Set(sampled).size).toBe(3);
	});

	it('sample() rejects over-sampling rather than silently returning fewer', () => {
		expect(() => createRng(1).sample([1, 2], 3)).toThrow(/asked for 3 of 2/);
	});

	it('pick() rejects an empty pool', () => {
		expect(() => createRng(1).pick([])).toThrow(/empty pool/);
	});
});

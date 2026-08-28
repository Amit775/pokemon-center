import { parseViewMode } from './view-mode';

describe('parseViewMode', () => {
	it('reads the one value it recognises', () => {
		expect(parseViewMode('table')).toBe('table');
	});

	it('falls back to the default for everything else, and never throws', () => {
		// A URL is user input. Every one of these is a shape that has actually reached a query
		// parameter at some point: absent, stripped, mistyped, or a value from a different feature.
		const rejected = [null, undefined, '', ' ', 'TABLE', 'Table', 'table ', 'cards', 'grid', 'true', '1', '%%%'];

		for (const raw of rejected) {
			expect(parseViewMode(raw)).toBe('default');
		}
	});
});

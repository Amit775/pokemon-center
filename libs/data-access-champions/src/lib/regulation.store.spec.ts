import { daysUntil } from './regulation.store';

/**
 * Regulation M-B's real window, used as the fixture throughout: it is the set that was live
 * when this domain was built, and its end date is the moment the seeded roster goes stale.
 */
const M_B_ENDS = '2026-09-02T00:00:00.000Z';

describe('daysUntil', () => {
	it('counts the days left in a regulation', () => {
		expect(daysUntil(M_B_ENDS, new Date('2026-08-21T12:00:00'))).toBe(12);
	});

	it('returns 0 on the final day rather than treating it as absent', () => {
		// The bug this guards: `@if (days; as d)` silently hides the countdown on day 0,
		// which is precisely the day the roster is about to become wrong.
		expect(daysUntil(M_B_ENDS, new Date('2026-09-02T09:30:00'))).toBe(0);
	});

	it('goes negative once the regulation has lapsed', () => {
		expect(daysUntil(M_B_ENDS, new Date('2026-09-05T00:00:00'))).toBe(-3);
	});

	it('counts calendar days, not elapsed hours', () => {
		// Late in the evening the day before, the answer is still a whole day.
		expect(daysUntil(M_B_ENDS, new Date('2026-09-01T23:00:00'))).toBe(1);
	});
});

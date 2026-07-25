import { emptyStreak, nextStreak } from './streak';

const at = (day: string, time = '12:00:00.000Z') => `${day}T${time}`;

describe('nextStreak', () => {
	it('starts at 1 on the first ever drill', () => {
		expect(nextStreak(emptyStreak, at('2026-07-25'))).toEqual({
			current: 1,
			best: 1,
			lastDrillISO: at('2026-07-25'),
		});
	});

	it('does not advance for a second drill the same day', () => {
		const after = nextStreak(emptyStreak, at('2026-07-25', '09:00:00.000Z'));
		expect(nextStreak(after, at('2026-07-25', '21:00:00.000Z'))).toBe(after);
	});

	it('extends across consecutive days', () => {
		let streak = nextStreak(emptyStreak, at('2026-07-25'));
		streak = nextStreak(streak, at('2026-07-26'));
		streak = nextStreak(streak, at('2026-07-27'));
		expect(streak.current).toBe(3);
		expect(streak.best).toBe(3);
	});

	it('counts a late-night then early-morning pair as two days', () => {
		const night = nextStreak(emptyStreak, at('2026-07-25', '23:59:00.000Z'));
		const morning = nextStreak(night, at('2026-07-26', '00:01:00.000Z'));
		expect(morning.current).toBe(2);
	});

	it('restarts after a missed day but keeps the best', () => {
		let streak = nextStreak(emptyStreak, at('2026-07-25'));
		streak = nextStreak(streak, at('2026-07-26'));
		streak = nextStreak(streak, at('2026-07-30'));
		expect(streak.current).toBe(1);
		expect(streak.best).toBe(2);
	});

	it('handles a month boundary', () => {
		const endOfMonth = nextStreak(emptyStreak, at('2026-07-31'));
		expect(nextStreak(endOfMonth, at('2026-08-01')).current).toBe(2);
	});

	it('handles a leap day', () => {
		const leap = nextStreak(emptyStreak, at('2028-02-28'));
		expect(nextStreak(leap, at('2028-02-29')).current).toBe(2);
	});
});

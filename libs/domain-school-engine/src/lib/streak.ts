/**
 * Daily drill streak.
 *
 * Pure date arithmetic, so it lives here rather than in the Angular store — it is domain
 * logic, and here it is testable without a TestBed (docs/school-plan.md 3.1).
 */
export interface Streak {
	current: number;
	best: number;
	/** ISO timestamp of the last completed drill; `null` before the first one. */
	lastDrillISO: string | null;
}

export const emptyStreak: Streak = { current: 0, best: 0, lastDrillISO: null };

/** Calendar day in UTC, so a drill at 23:59 and one at 00:01 count as two distinct days. */
const dayOf = (iso: string): string => iso.slice(0, 10);

const previousDay = (day: string): string => new Date(new Date(day).getTime() - 86_400_000).toISOString().slice(0, 10);

/**
 * Advance the streak for a completed drill.
 *
 * Same day: unchanged — drilling twice on Tuesday is not a two-day streak.
 * Consecutive day: extends. Any longer gap: restarts at 1, but `best` is never lost.
 */
export function nextStreak(streak: Streak, nowISO: string): Streak {
	const today = dayOf(nowISO);
	if (streak.lastDrillISO !== null && dayOf(streak.lastDrillISO) === today) return streak;

	const continued = streak.lastDrillISO !== null && dayOf(streak.lastDrillISO) === previousDay(today);
	const current = continued ? streak.current + 1 : 1;

	return { current, best: Math.max(current, streak.best), lastDrillISO: nowISO };
}

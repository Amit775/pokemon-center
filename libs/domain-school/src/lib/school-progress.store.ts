import { computed, effect } from '@angular/core';
import {
	curriculum,
	emptyRecord,
	emptyStreak,
	isMastered,
	masteredLessonIds,
	masteryScore,
	nextStreak,
	recordAttempt,
	unlockedLessons,
	weakestFirst,
	type Attempt,
	type LessonId,
	type MasteryRecord,
	type Streak,
} from '@pokemon-center/domain-school-engine';
import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';

/**
 * School progress, persisted locally.
 *
 * Deliberately localStorage rather than Postgres for now (docs/school-plan.md 3.4): School is
 * useful before accounts exist, and putting auth first would delay every lesson behind a login
 * form. The Postgres justification in master-plan.md 3.1 is deferred, not wrong — the trigger to
 * revisit is a second device or any social feature.
 *
 * Mirrors PokedexContextStore on purpose: same hydrate-on-init + persist-by-effect pattern,
 * same versioned storage key. All scoring and date logic lives in the engine; this store is
 * only plumbing.
 */

export interface SchoolSettings {
	timedDrills: boolean;
	/** When true, School's era follows the Pokedex's active game; otherwise it pins its own. */
	eraFollowsPokedex: boolean;
	/** School-local era, used only when `eraFollowsPokedex` is false. */
	versionGroup: string | null;
}

export interface SchoolProgressState {
	mastery: MasteryRecord[];
	/** The ruleset's blunt opt-out: makes the curriculum graph a guide rather than a gate. */
	unlockOverride: boolean;
	/**
	 * Lessons opened by the placement test — demonstrated, not mastered.
	 *
	 * Kept apart from `mastery` deliberately: answering one cold question proves you should not
	 * be gated, but it is not the sustained evidence mastery means, and folding it in would
	 * corrupt the signal every adaptive feature reads.
	 */
	granted: LessonId[];
	streak: Streak;
	settings: SchoolSettings;
}

const STORAGE_KEY = 'pokemon-center.school-progress.v1';

const initialState: SchoolProgressState = {
	mastery: [],
	unlockOverride: false,
	granted: [],
	streak: emptyStreak,
	settings: { timedDrills: false, eraFollowsPokedex: true, versionGroup: null },
};

function hydrate(): SchoolProgressState {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? { ...initialState, ...JSON.parse(raw) } : initialState;
	} catch {
		return initialState;
	}
}

export const SchoolProgressStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withComputed((store) => ({
		masteredIds: computed(() => masteredLessonIds(store.mastery())),
		grantedIds: computed(() => new Set(store.granted())),
	})),
	withComputed((store) => ({
		/** Lessons currently open — prereqs mastered, granted by placement, or opted out of. */
		available: computed(() => unlockedLessons(curriculum, store.masteredIds(), store.unlockOverride(), store.grantedIds())),
		masteredCount: computed(() => store.masteredIds().size),
	})),
	withMethods((store) => ({
		recordFor(lessonId: LessonId, attempt: Attempt): void {
			const existing = store.mastery().find((r) => r.lessonId === lessonId) ?? emptyRecord(lessonId);
			patchState(store, {
				mastery: [...store.mastery().filter((r) => r.lessonId !== lessonId), recordAttempt(existing, attempt)],
			});
		},
		scoreFor(lessonId: LessonId): number {
			const record = store.mastery().find((r) => r.lessonId === lessonId);
			return record ? masteryScore(record) : 0;
		},
		hasMastered(lessonId: LessonId): boolean {
			const record = store.mastery().find((r) => r.lessonId === lessonId);
			return record ? isMastered(record) : false;
		},
		/** Wipe one lesson's history — for a learner who wants an honest re-run. */
		resetLesson(lessonId: LessonId): void {
			patchState(store, { mastery: store.mastery().filter((r) => r.lessonId !== lessonId) });
		},
		setUnlockOverride(unlockOverride: boolean): void {
			patchState(store, { unlockOverride });
		},
		/** Open what a placement test demonstrated. Additive: a later test never takes access away. */
		applyPlacement(lessonIds: Iterable<LessonId>): void {
			patchState(store, { granted: [...new Set([...store.granted(), ...lessonIds])] });
		},
		clearPlacement(): void {
			patchState(store, { granted: [] });
		},
		/** Lessons ordered by how much they need practice; drives adaptive drilling. */
		practiceOrder(nowISO = new Date().toISOString()) {
			return weakestFirst(
				store.available().map((lesson) => lesson.id),
				store.mastery(),
				nowISO,
			);
		},
		updateSettings(settings: Partial<SchoolSettings>): void {
			patchState(store, { settings: { ...store.settings(), ...settings } });
		},
		/** Call once a drill is finished, not per question. */
		completeDrillDay(nowISO = new Date().toISOString()): void {
			patchState(store, { streak: nextStreak(store.streak(), nowISO) });
		},
	})),
	withHooks({
		onInit(store) {
			patchState(store, hydrate());
			effect(() => {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store)));
			});
		},
	}),
);

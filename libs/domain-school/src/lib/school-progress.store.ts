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
	/** The ruleset's opt-out: makes the curriculum graph a guide rather than a gate. */
	unlockOverride: boolean;
	streak: Streak;
	settings: SchoolSettings;
}

const STORAGE_KEY = 'pokemon-center.school-progress.v1';

const initialState: SchoolProgressState = {
	mastery: [],
	unlockOverride: false,
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
	})),
	withComputed((store) => ({
		/** Lessons currently open — every prereq mastered, or the learner opted out. */
		available: computed(() => unlockedLessons(curriculum, store.masteredIds(), store.unlockOverride())),
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

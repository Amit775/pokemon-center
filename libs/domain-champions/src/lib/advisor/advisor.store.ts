import { computed, effect } from '@angular/core';
import { speedTiers, teamWeaknesses, threatMatrix } from '@pokemon-center/champions-engine';
import { ChampTeamDocument, TypeChartDocument, champResource } from '@pokemon-center/data-access-champions';
import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { inferBuild, toTypeChart } from './build-inference';

/**
 * The advisor's state.
 *
 * **Local-first on purpose.** Team selections live in `localStorage` and every derived
 * number is computed in the browser from a type chart fetched once. Nothing about giving
 * advice depends on a round trip, which is what makes it usable during a real match: the
 * page survives a phone lock, a tab switch, and a dropped connection mid-battle.
 */

export const TEAM_SIZE = 6;

interface AdvisorState {
	/** Slugs of your six, sparse — a slot can be empty. */
	mine: (string | null)[];
	/** Slugs of the opponent's six, as revealed at team preview. */
	theirs: (string | null)[];
}

const emptyTeam = (): (string | null)[] => Array.from({ length: TEAM_SIZE }, () => null);

const STORAGE_KEY = 'pokemon-center.champions-advisor.v1';

const initialState: AdvisorState = { mine: emptyTeam(), theirs: emptyTeam() };

function hydrate(): AdvisorState {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return initialState;
		const parsed = JSON.parse(raw) as Partial<AdvisorState>;
		// Pad rather than trust the stored length: a schema change should not strand the user
		// with a four-slot team and no way to add more.
		const pad = (slots: (string | null)[] | undefined) => {
			const next = emptyTeam();
			(slots ?? []).slice(0, TEAM_SIZE).forEach((slug, index) => (next[index] = slug ?? null));
			return next;
		};
		return { mine: pad(parsed.mine), theirs: pad(parsed.theirs) };
	} catch {
		return initialState;
	}
}

export const AdvisorStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withComputed(({ mine, theirs }) => ({
		mySlugs: computed(() => mine().filter((slug): slug is string => slug !== null)),
		theirSlugs: computed(() => theirs().filter((slug): slug is string => slug !== null)),
	})),
	withProps(({ mySlugs, theirSlugs }) => ({
		// One query for both teams: they are calculated against each other, so a partial
		// result would render a half-built matrix.
		_teamQuery: champResource(ChampTeamDocument, () => ({ slugs: [...mySlugs(), ...theirSlugs()] })),
		_chartQuery: champResource(TypeChartDocument, () => ({})),
	})),
	withComputed(({ _teamQuery, _chartQuery, mySlugs, theirSlugs }) => {
		const members = computed(() => _teamQuery.value()?.champTeam ?? []);
		const typeChart = computed(() => toTypeChart(_chartQuery.value()?.typeChart ?? []));

		const bySlug = computed(() => new Map(members().map((m) => [m.slug, m])));

		const myBuilds = computed(() =>
			mySlugs()
				.map((slug) => bySlug().get(slug))
				.filter((m) => m !== undefined)
				.map(inferBuild),
		);

		const theirBuilds = computed(() =>
			theirSlugs()
				.map((slug) => bySlug().get(slug))
				.filter((m) => m !== undefined)
				.map(inferBuild),
		);

		const ready = computed(() => Object.keys(typeChart()).length > 0 && theirBuilds().length > 0);

		return {
			members,
			typeChart,
			myBuilds,
			theirBuilds,
			isLoading: computed(() => _teamQuery.isLoading() || _chartQuery.isLoading()),
			error: computed(() => _teamQuery.error() ?? _chartQuery.error()),

			/** True once there is enough on the board to say anything useful. */
			ready,

			/** Their collective type weaknesses — the "what do I click" answer. */
			theirWeaknesses: computed(() => (ready() ? teamWeaknesses(theirBuilds(), typeChart()) : null)),

			/** Merged, descending speed list across both teams. */
			tiers: computed(() => (ready() ? speedTiers(myBuilds(), theirBuilds()) : [])),

			/** The six-by-six, plus mustRemove and winConditions. */
			threats: computed(() => (ready() && myBuilds().length > 0 ? threatMatrix(myBuilds(), theirBuilds(), typeChart()) : null)),

			/** Whether any inferred learnset was approximated, so the UI can caveat once. */
			hasApproximateData: computed(() => [...myBuilds(), ...theirBuilds()].some((b) => b.learnsetIsApproximate)),
		};
	}),
	withMethods((store) => ({
		setSlot(side: 'mine' | 'theirs', index: number, slug: string | null): void {
			const current = side === 'mine' ? store.mine() : store.theirs();
			const next = [...current];
			next[index] = slug;
			patchState(store, { [side]: next } as Partial<AdvisorState>);
		},
		clearSide(side: 'mine' | 'theirs'): void {
			patchState(store, { [side]: emptyTeam() } as Partial<AdvisorState>);
		},
		clearAll(): void {
			patchState(store, { mine: emptyTeam(), theirs: emptyTeam() });
		},
	})),
	withHooks({
		onInit(store) {
			patchState(store, hydrate());
			// Persist on every change: mid-match, an unsaved team is a lost team.
			effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store))));
		},
	}),
);

import { computed, effect, inject } from '@angular/core';
import { speedTiers, teamWeaknesses, threatMatrix } from '@pokemon-center/champions-engine';
import { ChampionsTeamDocument, TypeChartDocument, championsResource } from '@pokemon-center/data-access-champions';
import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { BoxStore } from '../box/box.store';
import { boxEntryToBuild } from '../box/box-build';
import { inferBuild, toTypeChart } from './build-inference';

/**
 * The Companion's state.
 *
 * The important change since the Box exists: **your side is no longer inferred**. It comes
 * from a saved team, so the numbers for your own six are the ones you actually built. Only
 * the opponent is guessed at, which is the only side there is any excuse to guess about.
 *
 * Opponent selections stay local-first — they are per-match scratch, and a round trip to save
 * them would be latency in exactly the ninety seconds where you have none to spare.
 */

export const TEAM_SIZE = 6;

interface AdvisorState {
	/** Id of the saved team you are bringing, or null while none is chosen. */
	myTeamId: number | null;
	/** Slugs of the opponent's six, as revealed at team preview. Sparse. */
	theirs: (string | null)[];
}

const emptySix = (): (string | null)[] => Array.from({ length: TEAM_SIZE }, () => null);

const STORAGE_KEY = 'pokemon-center.champions-advisor.v2';

const initialState: AdvisorState = { myTeamId: null, theirs: emptySix() };

function hydrate(): AdvisorState {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return initialState;
		const parsed = JSON.parse(raw) as Partial<AdvisorState>;
		const padded = emptySix();
		(parsed.theirs ?? []).slice(0, TEAM_SIZE).forEach((slug, index) => (padded[index] = slug ?? null));
		return { myTeamId: parsed.myTeamId ?? null, theirs: padded };
	} catch {
		return initialState;
	}
}

export const AdvisorStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withComputed(({ theirs }) => ({
		theirSlugs: computed(() => theirs().filter((slug): slug is string => slug !== null)),
	})),
	withProps(({ theirSlugs }) => ({
		_box: inject(BoxStore),
		// Only the opponent needs fetching; your side is already in the Box.
		_theirQuery: championsResource(ChampionsTeamDocument, () => ({ slugs: theirSlugs() })),
		_chartQuery: championsResource(TypeChartDocument, () => ({})),
	})),
	withComputed(({ _box, _theirQuery, _chartQuery, theirSlugs, myTeamId }) => {
		const typeChart = computed(() => toTypeChart(_chartQuery.value()?.typeChart ?? []));

		const myTeam = computed(() => _box.teams().find((team) => team.id === myTeamId()) ?? null);

		/** Your six, from the Box — real spreads, real moves, nothing inferred. */
		const myBuilds = computed(() =>
			(myTeam()?.members ?? []).flatMap((member) => (member.boxPokemon ? [boxEntryToBuild(member.boxPokemon)] : [])),
		);

		const theirMembers = computed(() => _theirQuery.value()?.champTeam ?? []);
		const theirBuilds = computed(() => {
			const bySlug = new Map(theirMembers().map((theirMember) => [theirMember.slug, theirMember]));
			return theirSlugs().flatMap((slug) => {
				const member = bySlug.get(slug);
				return member ? [inferBuild(member)] : [];
			});
		});

		const ready = computed(() => Object.keys(typeChart()).length > 0 && theirBuilds().length > 0);

		return {
			myTeam,
			myBuilds,
			theirBuilds,
			theirMembers,
			typeChart,

			availableTeams: computed(() => _box.teams()),
			isLoading: computed(() => _theirQuery.isLoading() || _chartQuery.isLoading()),
			error: computed(() => _theirQuery.error() ?? _chartQuery.error()),

			ready,
			hasMyTeam: computed(() => myBuilds().length > 0),

			theirWeaknesses: computed(() => (ready() ? teamWeaknesses(theirBuilds(), typeChart()) : null)),
			tiers: computed(() => (ready() ? speedTiers(myBuilds(), theirBuilds()) : [])),
			threats: computed(() => (ready() && myBuilds().length > 0 ? threatMatrix(myBuilds(), theirBuilds(), typeChart()) : null)),

			/** Only ever true of the opponent now — your own learnsets come from the Box. */
			hasApproximateData: computed(() => theirBuilds().some((build) => build.learnsetIsApproximate)),
		};
	}),
	withMethods((store) => ({
		selectTeam(teamId: number | null): void {
			patchState(store, { myTeamId: teamId });
		},
		setOpponentSlot(index: number, slug: string | null): void {
			const next = [...store.theirs()];
			next[index] = slug;
			patchState(store, { theirs: next });
		},
		clearOpponent(): void {
			patchState(store, { theirs: emptySix() });
		},
	})),
	withHooks({
		onInit(store) {
			patchState(store, hydrate());
			effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store))));
		},
	}),
);

import { computed, effect, inject } from '@angular/core';
import { buildOpponentIntel, OpponentIntel, recommendSelection, SelectionRecommendation, speedTiers, teamWeaknesses, threatMatrix } from '@pokemon-center/champions-engine';
import { ChampionsTeamDocument, TypeChartDocument, championsResource } from '@pokemon-center/data-access-champions';
import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { BoxStore } from '../box/box.store';
import { boxEntryToBuild } from '../box/box-build';
import { inferBuild, toMove, toTypeChart } from './build-inference';
import { getUsageStat } from './usage-stat-stub';

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

		const theirMembers = computed(() => _theirQuery.value()?.championsTeam ?? []);

		/**
		 * One Opponent Intel per revealed slot, in slot order. Usage data (stubbed for now, see
		 * `docs/companion-plan.md`) overrides the inferred heuristic when present; `theirBuilds`
		 * below is the best-available guess extracted from it, so the existing threat grid and
		 * speed tiers become usage-aware automatically once real usage data lands.
		 */
		const theirIntel = computed<OpponentIntel[]>(() => {
			const bySlug = new Map(theirMembers().map((theirMember) => [theirMember.slug, theirMember]));
			const chart = typeChart();
			return theirSlugs().flatMap((slug) => {
				const member = bySlug.get(slug);
				if (!member) return [];
				const megaForm = member.megaForms[0];
				return [
					buildOpponentIntel(
						inferBuild(member),
						member.moves.map(toMove),
						member.abilities.map((ability) => ({
							slug: ability.ability.slug,
							name: ability.ability.name,
							effectText: ability.ability.effectText,
							isHidden: ability.isHidden,
						})),
						megaForm
							? {
									types: megaForm.types,
									baseStats: megaForm.baseStats,
									ability: member.megaAbility
										? { slug: member.megaAbility.slug, name: member.megaAbility.name, effectText: member.megaAbility.effectText }
										: null,
								}
							: null,
						getUsageStat(slug),
						chart,
					),
				];
			});
		});

		const theirBuilds = computed(() => theirIntel().map((intel) => intel.build));

		const ready = computed(() => Object.keys(typeChart()).length > 0 && theirBuilds().length > 0);

		const selectionRecommendation = computed<SelectionRecommendation | null>(() =>
			ready() && myBuilds().length > 0 ? recommendSelection(myBuilds(), theirIntel(), typeChart(), 'singles', 3) : null,
		);

		return {
			myTeam,
			myBuilds,
			theirBuilds,
			theirIntel,
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
			selectionRecommendation,

			/** Only ever true of the opponent now — your own learnsets come from the Box. */
			hasApproximateData: computed(() => theirMembers().some((member) => member.learnsetIsApproximate)),
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

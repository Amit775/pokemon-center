import { computed, inject } from '@angular/core';
import { analyzeTeamSynergy, recommendSynergyCandidates, ChampionsSpecies, SynergyFormat } from '@pokemon-center/champions-engine';
import { ChampionsRosterDocument, TypeChartDocument, championsResource } from '@pokemon-center/data-access-champions';
import { patchState, signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { toTypeChart } from '../advisor/build-inference';

export const SYNERGY_TEAM_SIZE = 6;

interface SynergyState {
	format: SynergyFormat;
	slots: (string | null)[];
}

const emptySlots = (): (string | null)[] => Array.from({ length: SYNERGY_TEAM_SIZE }, () => null);

function toSpecies(pokemon: {
	id: number;
	slug: string;
	name: string;
	types: string[];
	isMega: boolean;
	baseStats: { hp: number; attack: number; defense: number; specialAttack: number; specialDefense: number; speed: number };
}): ChampionsSpecies {
	return { ...pokemon, abilities: [] };
}

/** Shared Synergy feature state. It owns selection only; analysis is a derived engine result. */
export const SynergyStore = signalStore(
	{ providedIn: 'root' },
	withState<SynergyState>({ format: 'singles', slots: emptySlots() }),
	withComputed(({ slots }) => ({ selectedSlugs: computed(() => slots().filter((slug): slug is string => slug !== null)) })),
	withProps(() => ({
		_rosterQuery: championsResource(ChampionsRosterDocument, () => ({ includeMegas: false, take: 400 })),
		_chartQuery: championsResource(TypeChartDocument, () => ({})),
	})),
	withComputed(({ _rosterQuery, _chartQuery, selectedSlugs, format }) => {
		const roster = computed(() => (_rosterQuery.value()?.championsRoster ?? []).map(toSpecies));
		const chart = computed(() => toTypeChart(_chartQuery.value()?.typeChart ?? []));
		const team = computed(() => {
			const bySlug = new Map(roster().map((pokemon) => [pokemon.slug, pokemon]));
			return selectedSlugs().flatMap((slug) => {
				const pokemon = bySlug.get(slug);
				return pokemon ? [pokemon] : [];
			});
		});

		return {
			roster,
			team,
			analysis: computed(() => analyzeTeamSynergy(team(), chart(), format())),
			recommendations: computed(() => recommendSynergyCandidates(team(), roster(), chart(), format()).slice(0, 8)),
			isLoading: computed(() => _rosterQuery.isLoading() || _chartQuery.isLoading()),
			error: computed(() => _rosterQuery.error() ?? _chartQuery.error()),
		};
	}),
	withMethods((store) => ({
		setFormat(format: SynergyFormat): void {
			patchState(store, { format });
		},
		setSlot(index: number, slug: string | null): void {
			if (index < 0 || index >= SYNERGY_TEAM_SIZE) return;
			const slots = [...store.slots()];
			slots[index] = slug;
			patchState(store, { slots });
		},
		clearTeam(): void {
			patchState(store, { slots: emptySlots() });
		},
	})),
);

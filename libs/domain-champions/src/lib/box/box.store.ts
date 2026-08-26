import { computed, inject } from '@angular/core';
import {
	BoxDocument,
	BoxPokemonInput,
	DeleteBoxPokemonDocument,
	DeleteTeamDocument,
	SaveBoxPokemonDocument,
	SaveTeamDocument,
	TeamInput,
	TeamsDocument,
	championsResource,
	injectChampionsMutate,
} from '@pokemon-center/data-access-champions';
import { signalStore, withComputed, withMethods, withProps } from '@ngrx/signals';

/**
 * The Box and your teams.
 *
 * Unlike every other store in this domain, this one is **server-backed rather than
 * local-first**. A Box entry is a considered thing you built and will reuse for months; the
 * advisor's scratch state is not. Losing a battle log to a cleared browser is an annoyance,
 * losing your teams is the app.
 *
 * Mutations reload the affected query rather than patching local state. At this size the
 * round trip is imperceptible and it removes a whole class of "the screen disagrees with the
 * database" bug.
 */
export const BoxStore = signalStore(
	{ providedIn: 'root' },
	withProps(() => ({
		_boxQuery: championsResource(BoxDocument, () => ({})),
		_teamsQuery: championsResource(TeamsDocument, () => ({ isMine: true })),
		_mutate: injectChampionsMutate(),
	})),
	withComputed(({ _boxQuery, _teamsQuery }) => ({
		entries: computed(() => _boxQuery.value()?.box ?? []),
		teams: computed(() => _teamsQuery.value()?.teams ?? []),
		isLoading: computed(() => _boxQuery.isLoading() || _teamsQuery.isLoading()),
		error: computed(() => _boxQuery.error() ?? _teamsQuery.error()),
		isEmpty: computed(() => !_boxQuery.isLoading() && (_boxQuery.value()?.box.length ?? 0) === 0),
	})),
	withMethods((store) => ({
		async save(input: BoxPokemonInput): Promise<void> {
			await store._mutate(SaveBoxPokemonDocument, { input });
			store._boxQuery.reload();
			// A saved build can change a team's numbers, so the teams view is stale too.
			store._teamsQuery.reload();
		},

		async remove(id: number): Promise<void> {
			await store._mutate(DeleteBoxPokemonDocument, { id });
			store._boxQuery.reload();
			store._teamsQuery.reload();
		},

		async saveTeam(input: TeamInput): Promise<void> {
			await store._mutate(SaveTeamDocument, { input });
			store._teamsQuery.reload();
		},

		async removeTeam(id: number): Promise<void> {
			await store._mutate(DeleteTeamDocument, { id });
			store._teamsQuery.reload();
		},

		reload(): void {
			store._boxQuery.reload();
			store._teamsQuery.reload();
		},
	})),
);

/** Convenience accessor, matching how the other domain stores are injected. */
export const injectBox = () => inject(BoxStore);

import { Signal, computed, inject } from '@angular/core';
import { CurrentRegulationDocument, champResource } from '@pokemon-center/data-access-champions';
import { signalStore, withComputed, withProps } from '@ngrx/signals';

/** Milliseconds in a day, for the countdown to the next regulation. */
const DAY_MS = 86_400_000;

/**
 * Whole days from `now` until a regulation's end date.
 *
 * Zero on the final day, negative once it has lapsed. Pure and exported so the boundary
 * cases are testable without a TestBed — the day-0 case in particular, since a regulation's
 * last day is exactly when the roster is about to go stale.
 *
 * Both sides are floored to local midnight so the result counts calendar days rather than
 * elapsed hours: at 23:00 the day before a regulation ends, the answer is 1, not 0.
 */
export function daysUntil(endsOn: string, now: Date = new Date()): number {
	const midnight = new Date(now);
	midnight.setHours(0, 0, 0, 0);
	return Math.round((new Date(endsOn).getTime() - midnight.getTime()) / DAY_MS);
}

/**
 * The active regulation as the UI consumes it.
 *
 * Declared explicitly rather than inferred from the generated query type: the inference
 * chain runs through `httpResource` and `signalStore`, and when any link widens, the failure
 * surfaces as `unknown` inside a template — far from the cause. Pinning it here keeps the
 * error where the mistake is.
 */
export interface ActiveRegulation {
	id: number;
	code: string;
	name: string;
	/** ISO-8601 date string. */
	startsOn: string;
	/** ISO-8601 date string. */
	endsOn: string;
	isCurrent: boolean;
	legalCount: number;
	notes: string | null;
}

/**
 * The active Champions regulation.
 *
 * This is the Champions analogue of `PokedexContextStore.activeVersionGroup` — the single
 * scoping signal every downstream feature reads. Champions has no fixed dex: legality is
 * always relative to a regulation set, so nothing in this domain should ever ask "is this
 * Pokémon legal?" without a regulation in hand.
 */
export const RegulationStore = signalStore(
	{ providedIn: 'root' },
	// Underscore-prefixed members are private to the store in @ngrx/signals, which is what
	// we want for the transport: consumers read regulation state, never the raw resource.
	withProps(() => ({
		_query: champResource(CurrentRegulationDocument, () => ({})),
	})),
	withComputed(({ _query }) => {
		const regulation: Signal<ActiveRegulation | null> = computed(() => _query.value()?.currentRegulation ?? null);

		return {
			regulation,
			isLoading: computed(() => _query.isLoading()),
			error: computed(() => _query.error()),

			/** Regulation code, e.g. `M-B`. */
			code: computed(() => regulation()?.code ?? null),

			/** How many Pokémon are legal. Zero until the roster is seeded (M1). */
			legalCount: computed(() => regulation()?.legalCount ?? 0),

			/** False before the derive pipeline has run — the UI says so rather than showing an empty dex. */
			hasRoster: computed(() => (regulation()?.legalCount ?? 0) > 0),

			/**
			 * Days until this regulation ends. Zero on the final day and negative once it has
			 * lapsed — a lapsed regulation means the seeded roster is stale, which is worth
			 * saying out loud rather than quietly showing old data.
			 */
			daysRemaining: computed<number | null>(() => {
				const endsOn = regulation()?.endsOn;
				return endsOn ? daysUntil(endsOn) : null;
			}),
		};
	}),
);

/** Convenience accessor mirroring how the Pokedex domain injects its context store. */
export const injectRegulation = () => inject(RegulationStore);

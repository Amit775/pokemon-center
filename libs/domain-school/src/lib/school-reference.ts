import { Injectable, computed, inject } from '@angular/core';
import { PokedexContextStore, TypeChartDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import type { GameContext, ReferenceData, TypeChart } from '@pokemon-center/domain-school-engine';
import { SchoolProgressStore } from './school-progress.store';

/**
 * Supplies the engine with reference data.
 *
 * The engine is deliberately data-free (docs/school-plan.md 3.1), so this is the seam where the
 * API meets it. The type chart is ~324 rows, so it is fetched once and then drives unlimited
 * client-side generation — no round-trip per question (3.2).
 */
@Injectable({ providedIn: 'root' })
export class SchoolReference {
	private readonly pokedex = inject(PokedexContextStore);
	private readonly progress = inject(SchoolProgressStore);

	/**
	 * School follows the Pokedex's active game by default, but can pin its own era — drilling
	 * gen-1 mechanics while browsing gen-9 is a legitimate thing to want (open question 1).
	 */
	readonly versionGroup = computed(() => {
		const settings = this.progress.settings();
		return settings.eraFollowsPokedex ? this.pokedex.activeVersionGroup() : settings.versionGroup;
	});

	private readonly query = gqlResource(TypeChartDocument, () => ({ versionGroup: this.versionGroup() }));

	readonly isLoading = computed(() => this.query.isLoading());
	readonly hasError = computed(() => this.query.error() !== undefined);

	readonly typeChart = computed<TypeChart | null>(() => {
		const chart = this.query.hasValue() ? this.query.value()?.typeChart : undefined;
		// An unknown version group returns an empty chart rather than a silently-modern one;
		// treat that as "no data" so generators are never handed a chart they cannot use.
		if (!chart || chart.types.length === 0) return null;

		const factor: Record<string, Record<string, number>> = {};
		for (const type of chart.types) factor[type] = {};
		for (const cell of chart.cells) {
			const row = factor[cell.damageType] as Record<string, number> | undefined;
			// `factor` already arrives as a multiplier (0 / 0.5 / 1 / 2), not the stored percentage.
			if (row) row[cell.targetType] = cell.factor;
		}
		return { types: chart.types, factor };
	});

	/**
	 * Always an object — sections arrive independently, so "the move table has not loaded"
	 * is a normal state that leaves type-chart lessons perfectly playable. Callers ask
	 * `isLessonPlayable` rather than testing for null.
	 */
	readonly reference = computed<ReferenceData>(() => {
		const typeChart = this.typeChart();
		return typeChart ? { typeChart } : {};
	});

	readonly context = computed<GameContext>(() => ({
		versionGroup: this.versionGroup(),
		generation: (this.query.hasValue() ? this.query.value()?.typeChart.generationId : null) ?? null,
	}));
}

import { Injectable, computed, inject } from '@angular/core';
import { MoveMechanicsDocument, NatureListDocument, PokedexContextStore, TypeChartDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import type { DamageClass, GameContext, MoveRef, NatureRef, ReferenceData, TypeChart } from '@pokemon-center/domain-school-engine';
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
	private readonly movesQuery = gqlResource(MoveMechanicsDocument, () => ({ versionGroup: this.versionGroup(), take: 500 }));
	// Natures are era-independent: the same 25 in every generation that has them.
	private readonly naturesQuery = gqlResource(NatureListDocument, () => ({}));

	readonly isLoading = computed(() => this.query.isLoading() || this.movesQuery.isLoading() || this.naturesQuery.isLoading());
	readonly hasError = computed(
		() => this.query.error() !== undefined || this.movesQuery.error() !== undefined || this.naturesQuery.error() !== undefined,
	);

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

	readonly moves = computed<readonly MoveRef[] | undefined>(() => {
		const rows = this.movesQuery.hasValue() ? this.movesQuery.value()?.moveMechanics : undefined;
		if (!rows || rows.length === 0) return undefined;

		return rows.map((row) => ({
			slug: row.slug,
			type: row.type,
			damageClass: row.damageClass as DamageClass,
			power: row.power ?? null,
			accuracy: row.accuracy ?? null,
			pp: row.pp ?? null,
			priority: row.priority,
			// The API reports "no ailment" as the identifier `none`; the engine expects null.
			ailment: row.ailment === null || row.ailment === 'none' ? null : row.ailment,
			ailmentChance: row.ailmentChance,
			critRate: row.critRate,
			flinchChance: row.flinchChance,
			drain: row.drain,
			healing: row.healing,
			minHits: row.minHits ?? null,
			maxHits: row.maxHits ?? null,
			statChance: row.statChance,
			statChanges: row.statChanges.map((change) => ({ stat: change.stat, change: change.change })),
		}));
	});

	readonly natures = computed<readonly NatureRef[] | undefined>(() => {
		const rows = this.naturesQuery.hasValue() ? this.naturesQuery.value()?.natureList : undefined;
		if (!rows || rows.length === 0) return undefined;
		return rows.map((row) => ({ slug: row.slug, increased: row.increased, decreased: row.decreased }));
	});

	/**
	 * Always an object, and each section is omitted until it genuinely arrives — sections load
	 * independently, so a missing move table should leave type-chart lessons perfectly playable.
	 * Callers ask `isLessonPlayable` rather than testing for null.
	 */
	readonly reference = computed<ReferenceData>(() => {
		const reference: ReferenceData = {};
		const typeChart = this.typeChart();
		const moves = this.moves();
		const natures = this.natures();

		if (typeChart) reference.typeChart = typeChart;
		if (moves) reference.moves = moves;
		if (natures) reference.natures = natures;
		return reference;
	});

	readonly context = computed<GameContext>(() => ({
		versionGroup: this.versionGroup(),
		generation: (this.query.hasValue() ? this.query.value()?.typeChart.generationId : null) ?? null,
	}));
}

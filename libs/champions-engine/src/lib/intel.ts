import { defensiveProfile, DefensiveProfile } from './matchup';
import { ChampionsBuild, ChampionsMove, StatSpread, TypeChart, TypeSlug } from './types';

/**
 * Turns a fallback (inferred) build plus optional usage data into a labelled prediction.
 *
 * Usage data overrides the heuristic guess field-by-field, never wholesale — a species with a
 * known moveset but no known item still gets real predicted moves and an honestly-absent item
 * prediction, rather than losing the moves just because one field has no data.
 */

export interface UsageStat {
	pokemonSlug: string;
	moves: { moveSlug: string; usagePercent: number }[];
	abilities: { abilitySlug: string; usagePercent: number }[];
	items: { itemSlug: string; usagePercent: number }[];
	/** Fraction of appearances holding the Mega Stone, or null when there is no signal. */
	megaRate: number | null;
	sampleSize: number;
	asOfRegulation: string;
}

export type PredictedSource = 'usage' | 'inferred';

export interface PredictedEntry<T> {
	value: T;
	source: PredictedSource;
	/** The usage percent this prediction was ranked by. Absent for inferred entries. */
	confidence?: number;
}

export interface AbilityOption {
	slug: string;
	name: string;
	effectText: string | null;
	isHidden: boolean;
}

export interface MegaFormData {
	types: TypeSlug[];
	baseStats: StatSpread;
	ability: { slug: string; name: string; effectText: string | null } | null;
}

export interface MegaPreview extends MegaFormData {
	/** True when the Mega form's typing differs from the base form's. */
	typeChanged: boolean;
}

export interface OpponentIntel {
	/** Best-available guess as a battle-ready build: usage-preferred, inferred-fallback. */
	build: ChampionsBuild;
	typeProfile: DefensiveProfile;
	predictedMoves: PredictedEntry<ChampionsMove>[];
	predictedAbility: PredictedEntry<{ slug: string; name: string; effectText: string | null }> | null;
	/** Null means genuinely no signal — never a guessed default. */
	predictedItem: PredictedEntry<string> | null;
	megaPreview: MegaPreview | null;
}

function sameTypeSet(a: readonly TypeSlug[], b: readonly TypeSlug[]): boolean {
	if (a.length !== b.length) return false;
	const sortedA = [...a].sort();
	const sortedB = [...b].sort();
	return sortedA.every((type, index) => type === sortedB[index]);
}

export function buildOpponentIntel(
	fallback: ChampionsBuild,
	learnset: readonly ChampionsMove[],
	abilityOptions: readonly AbilityOption[],
	megaForm: MegaFormData | null,
	usage: UsageStat | null,
	chart: TypeChart,
): OpponentIntel {
	const learnsetBySlug = new Map(learnset.map((move) => [move.slug, move]));
	const abilityBySlug = new Map(abilityOptions.map((ability) => [ability.slug, ability]));

	const usageMoves = [...(usage?.moves ?? [])]
		.sort((first, second) => second.usagePercent - first.usagePercent)
		.map((entry) => ({ move: learnsetBySlug.get(entry.moveSlug), usagePercent: entry.usagePercent }))
		.filter((entry): entry is { move: ChampionsMove; usagePercent: number } => entry.move !== undefined)
		.slice(0, 4);

	const predictedMoves: PredictedEntry<ChampionsMove>[] =
		usageMoves.length > 0
			? usageMoves.map((entry) => ({ value: entry.move, source: 'usage' as const, confidence: entry.usagePercent }))
			: fallback.moves.map((move) => ({ value: move, source: 'inferred' as const }));

	const topUsageAbility = [...(usage?.abilities ?? [])].sort((first, second) => second.usagePercent - first.usagePercent)[0];
	const usageAbility = topUsageAbility ? abilityBySlug.get(topUsageAbility.abilitySlug) : undefined;
	const fallbackAbility = fallback.ability ? abilityBySlug.get(fallback.ability) : undefined;

	const predictedAbility: OpponentIntel['predictedAbility'] = usageAbility
		? { value: usageAbility, source: 'usage', confidence: topUsageAbility!.usagePercent }
		: fallbackAbility
			? { value: fallbackAbility, source: 'inferred' }
			: null;

	const topUsageItem = [...(usage?.items ?? [])].sort((first, second) => second.usagePercent - first.usagePercent)[0];
	const predictedItem: OpponentIntel['predictedItem'] = topUsageItem
		? { value: topUsageItem.itemSlug, source: 'usage', confidence: topUsageItem.usagePercent }
		: null;

	const megaPreview: MegaPreview | null = megaForm
		? { ...megaForm, typeChanged: !sameTypeSet(fallback.species.types, megaForm.types) }
		: null;

	return {
		build: {
			...fallback,
			moves: predictedMoves.map((entry) => entry.value),
			ability: predictedAbility?.value.slug ?? null,
			item: predictedItem?.value ?? null,
		},
		typeProfile: defensiveProfile(fallback.species.types, chart),
		predictedMoves,
		predictedAbility,
		predictedItem,
		megaPreview,
	};
}

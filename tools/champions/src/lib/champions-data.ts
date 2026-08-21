/**
 * The shape of `data/champions/derived/*.json` — the pipeline's review gate.
 *
 * `derive` writes it, a human reads the diff, `seed` loads it. Keeping it a plain committed
 * artefact is the whole point: when a regulation rotates, the change to the game shows up as
 * a reviewable diff in the repo rather than as a silent mutation of the database.
 */

export interface DerivedType {
	id: number;
	slug: string;
	name: string;
}

export interface DerivedTypeEfficacy {
	attackingTypeId: number;
	defendingTypeId: number;
	damageFactor: number;
}

export interface DerivedAbility {
	id: number;
	slug: string;
	name: string;
	effectText: string | null;
	isMega: boolean;
}

export interface DerivedMove {
	id: number;
	slug: string;
	name: string;
	typeId: number;
	damageClass: 'PHYSICAL' | 'SPECIAL' | 'STATUS';
	power: number | null;
	pp: number | null;
	accuracy: number | null;
	priority: number;
	effectText: string | null;
	effectChance: number | null;
	flags: string[];
	/** True when Champions changed this move relative to the mainline games. */
	isOverridden: boolean;
	overrideNote: string | null;
}

export interface DerivedPokemon {
	id: number;
	slug: string;
	name: string;
	nationalDexNo: number;
	type1Id: number;
	type2Id: number | null;
	baseHp: number;
	baseAttack: number;
	baseDefense: number;
	baseSpecialAttack: number;
	baseSpecialDefense: number;
	baseSpeed: number;
	isMega: boolean;
	megaOfId: number | null;
	megaAbilityId: number | null;
	spriteKey: string | null;
	/** Ability ids in slot order; a Mega's fixed ability is `megaAbilityId`. */
	abilities: { abilityId: number; slot: number; isHidden: boolean }[];
	/** Move ids this Pokémon can learn. */
	moveIds: number[];
	/**
	 * True when the learnset was filled in from recent mainline games because the dataset's
	 * `champions` version group had gaps. Surfaced in the UI so a move list that might be
	 * slightly generous is labelled as such rather than presented as verified.
	 */
	learnsetIsApproximate: boolean;
}

export interface DerivedRegulation {
	code: string;
	name: string;
	startsOn: string;
	endsOn: string;
	isCurrent: boolean;
	notes: string | null;
	/** Ids of every legal Pokémon, base forms and Megas alike. */
	legalPokemonIds: number[];
}

export interface DerivedDataset {
	/** Provenance: what was fetched, from where, and when. */
	source: {
		fetchedAt: string;
		pages: { title: string; url: string; revisionId?: number }[];
	};
	regulation: DerivedRegulation;
	types: DerivedType[];
	typeEfficacy: DerivedTypeEfficacy[];
	abilities: DerivedAbility[];
	moves: DerivedMove[];
	pokemon: DerivedPokemon[];
	/** Entries the pipeline could not resolve against the mainline dataset. */
	unresolved: { kind: 'pokemon' | 'move'; name: string; reason: string }[];
}

/** Where the pipeline keeps its artefacts, relative to the workspace root. */
export const CHAMPIONS_DATA_DIR = 'data/champions';
export const RAW_DIR = `${CHAMPIONS_DATA_DIR}/raw`;
export const DERIVED_DIR = `${CHAMPIONS_DATA_DIR}/derived`;

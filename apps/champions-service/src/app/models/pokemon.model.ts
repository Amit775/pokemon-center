import { Field, Float, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

/** Mirrors the `DamageClass` enum in the Champions Prisma schema. */
export enum DamageClass {
	PHYSICAL = 'PHYSICAL',
	SPECIAL = 'SPECIAL',
	STATUS = 'STATUS',
}

registerEnumType(DamageClass, { name: 'DamageClass' });

@ObjectType()
export class ChampType {
	@Field(() => Int) id!: number;
	@Field() slug!: string;
	@Field() name!: string;
}

@ObjectType()
export class ChampAbility {
	@Field(() => Int) id!: number;
	@Field() slug!: string;
	@Field() name!: string;
	@Field(() => String, { nullable: true }) effectText!: string | null;
	/** True for abilities that exist only on a Mega form. */
	@Field() isMega!: boolean;
}

@ObjectType()
export class ChampMove {
	@Field(() => Int) id!: number;
	@Field() slug!: string;
	@Field() name!: string;
	@Field() type!: string;
	@Field(() => DamageClass) damageClass!: DamageClass;
	@Field(() => Int, { nullable: true }) power!: number | null;
	@Field(() => Int, { nullable: true }) pp!: number | null;
	@Field(() => Int, { nullable: true }) accuracy!: number | null;
	@Field(() => Int) priority!: number;
	@Field(() => [String]) flags!: string[];
	@Field(() => String, { nullable: true }) effectText!: string | null;
	@Field(() => Int, { nullable: true }) effectChance!: number | null;
	/**
	 * True when Champions changed this move from its mainline value. Drives the "differs
	 * from mainline" badge — the single most useful thing a Champions dex can show someone
	 * arriving from the main series.
	 */
	@Field() isOverridden!: boolean;
	@Field(() => String, { nullable: true }) overrideNote!: string | null;
}

@ObjectType()
export class BaseStats {
	@Field(() => Int) hp!: number;
	@Field(() => Int) attack!: number;
	@Field(() => Int) defense!: number;
	@Field(() => Int) specialAttack!: number;
	@Field(() => Int) specialDefense!: number;
	@Field(() => Int) speed!: number;
	@Field(() => Int) total!: number;
}

@ObjectType()
export class PokemonAbilitySlot {
	@Field(() => ChampAbility) ability!: ChampAbility;
	@Field(() => Int) slot!: number;
	@Field() isHidden!: boolean;
}

/** Enough to render a search result or a team slot without fetching a learnset. */
@ObjectType()
export class ChampPokemonSummary {
	@Field(() => Int) id!: number;
	@Field() slug!: string;
	@Field() name!: string;
	@Field(() => Int) nationalDexNo!: number;
	@Field(() => [String]) types!: string[];
	@Field(() => BaseStats) baseStats!: BaseStats;
	@Field() isMega!: boolean;
	@Field(() => String, { nullable: true }) spriteKey!: string | null;
	/** Slug of the base form a Mega evolves from. */
	@Field(() => String, { nullable: true }) megaOfSlug!: string | null;
}

/** Everything the advisor needs to build and calculate with a Pokémon. */
@ObjectType()
export class ChampPokemonDetail extends ChampPokemonSummary {
	@Field(() => [PokemonAbilitySlot]) abilities!: PokemonAbilitySlot[];
	@Field(() => ChampAbility, { nullable: true }) megaAbility!: ChampAbility | null;
	@Field(() => [ChampMove]) moves!: ChampMove[];
	/** Megas legal in the current regulation that this Pokémon can become. */
	@Field(() => [ChampPokemonSummary]) megaForms!: ChampPokemonSummary[];
	/**
	 * True when the learnset was supplemented from recent mainline games because the
	 * dataset's Champions version group had gaps. Surfaced so a slightly generous move list
	 * is labelled rather than presented as verified.
	 */
	@Field() learnsetIsApproximate!: boolean;
}

@ObjectType()
export class TypeEfficacyEntry {
	@Field() attacking!: string;
	@Field() defending!: string;
	/** 0, 0.5, 1 or 2. */
	@Field(() => Float) factor!: number;
}

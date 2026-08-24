import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { ChampAbility, ChampMove, ChampPokemonSummary } from './pokemon.model';

/**
 * The Box and teams — the mutable half of the Champions API.
 *
 * Input types are written by hand rather than generated, so the write surface stays exactly
 * as wide as the app needs. Generated CRUD would expose deleteMany and upsert on every model,
 * which is precisely what the hand-written approach is avoiding.
 */

@ObjectType()
export class StatPointSpread {
	@Field(() => Int) hp!: number;
	@Field(() => Int) attack!: number;
	@Field(() => Int) defense!: number;
	@Field(() => Int) specialAttack!: number;
	@Field(() => Int) specialDefense!: number;
	@Field(() => Int) speed!: number;
	/** Sum of the six, so the client does not have to add them up to show a budget. */
	@Field(() => Int) total!: number;
}

@InputType()
export class StatPointSpreadInput {
	@Field(() => Int, { defaultValue: 0 }) hp!: number;
	@Field(() => Int, { defaultValue: 0 }) attack!: number;
	@Field(() => Int, { defaultValue: 0 }) defense!: number;
	@Field(() => Int, { defaultValue: 0 }) specialAttack!: number;
	@Field(() => Int, { defaultValue: 0 }) specialDefense!: number;
	@Field(() => Int, { defaultValue: 0 }) speed!: number;
}

/** One Pokémon you own, with the choices you actually made. */
@ObjectType()
export class BoxPokemon {
	@Field(() => Int) id!: number;
	@Field(() => ChampPokemonSummary) pokemon!: ChampPokemonSummary;
	@Field(() => String, { nullable: true }) nickname!: string | null;
	@Field(() => String, { nullable: true }) nature!: string | null;
	@Field(() => ChampAbility, { nullable: true }) ability!: ChampAbility | null;
	@Field(() => String, { nullable: true }) item!: string | null;
	@Field(() => StatPointSpread) statPoints!: StatPointSpread;
	@Field(() => [ChampMove]) moves!: ChampMove[];
	@Field(() => String, { nullable: true }) notes!: string | null;
}

@InputType()
export class BoxPokemonInput {
	/** Omit to create; supply to update in place. */
	@Field(() => Int, { nullable: true }) id?: number;
	@Field(() => Int) pokemonId!: number;
	@Field(() => String, { nullable: true }) nickname?: string;
	@Field(() => String, { nullable: true }) nature?: string;
	@Field(() => Int, { nullable: true }) abilityId?: number;
	@Field(() => String, { nullable: true }) item?: string;
	@Field(() => StatPointSpreadInput) statPoints!: StatPointSpreadInput;
	/** Move ids in slot order; at most four. */
	@Field(() => [Int], { defaultValue: [] }) moveIds!: number[];
	@Field(() => String, { nullable: true }) notes?: string;
}

@ObjectType()
export class TeamMember {
	@Field(() => Int) slot!: number;
	@Field(() => ChampPokemonSummary) pokemon!: ChampPokemonSummary;
	/** Present on your own teams: the exact build from your Box. */
	@Field(() => BoxPokemon, { nullable: true }) boxPokemon!: BoxPokemon | null;
}

@ObjectType()
export class Team {
	@Field(() => Int) id!: number;
	@Field() label!: string;
	@Field() isMine!: boolean;
	@Field(() => String, { nullable: true }) notes!: string | null;
	@Field(() => [TeamMember]) members!: TeamMember[];
}

@InputType()
export class TeamMemberInput {
	@Field(() => Int) slot!: number;
	@Field(() => Int) pokemonId!: number;
	@Field(() => Int, { nullable: true }) boxPokemonId?: number;
}

@InputType()
export class TeamInput {
	@Field(() => Int, { nullable: true }) id?: number;
	@Field() label!: string;
	@Field({ defaultValue: true }) isMine!: boolean;
	@Field(() => String, { nullable: true }) notes?: string;
	@Field(() => [TeamMemberInput], { defaultValue: [] }) members!: TeamMemberInput[];
}

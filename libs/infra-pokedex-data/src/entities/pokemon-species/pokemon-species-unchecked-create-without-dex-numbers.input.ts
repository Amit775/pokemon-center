import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedCreateNestedManyWithoutEvolvesFromInput } from './pokemon-species-unchecked-create-nested-many-without-evolves-from.input';
import { PokemonUncheckedCreateNestedManyWithoutSpeciesInput } from '../pokemon/pokemon-unchecked-create-nested-many-without-species.input';
import { PokemonEggGroupsUncheckedCreateNestedManyWithoutSpeciesInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-create-nested-many-without-species.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutEvolvedSpeciesInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-evolved-species.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutPartySpeciesInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-party-species.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutTradeSpeciesInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-trade-species.input';

@InputType()
export class PokemonSpeciesUncheckedCreateWithoutDexNumbersInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:true})
    evolves_from_species_id?: number;

    @Field(() => Int, {nullable:false})
    evolution_chain_id!: number;

    @Field(() => Int, {nullable:false})
    color_id!: number;

    @Field(() => Int, {nullable:false})
    shape_id!: number;

    @Field(() => Int, {nullable:true})
    habitat_id?: number;

    @Field(() => Int, {nullable:false})
    gender_rate!: number;

    @Field(() => Int, {nullable:false})
    capture_rate!: number;

    @Field(() => Int, {nullable:false})
    base_happiness!: number;

    @Field(() => Int, {nullable:false})
    is_baby!: number;

    @Field(() => Int, {nullable:false})
    hatch_counter!: number;

    @Field(() => Int, {nullable:false})
    has_gender_differences!: number;

    @Field(() => Int, {nullable:false})
    growth_rate_id!: number;

    @Field(() => Int, {nullable:false})
    forms_switchable!: number;

    @Field(() => Int, {nullable:false})
    is_legendary!: number;

    @Field(() => Int, {nullable:false})
    is_mythical!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:true})
    conquest_order?: number;

    @Field(() => PokemonSpeciesUncheckedCreateNestedManyWithoutEvolvesFromInput, {nullable:true})
    evolvesTo?: Identity<PokemonSpeciesUncheckedCreateNestedManyWithoutEvolvesFromInput>;

    @Field(() => PokemonUncheckedCreateNestedManyWithoutSpeciesInput, {nullable:true})
    pokemon?: Identity<PokemonUncheckedCreateNestedManyWithoutSpeciesInput>;

    @Field(() => PokemonEggGroupsUncheckedCreateNestedManyWithoutSpeciesInput, {nullable:true})
    eggGroups?: Identity<PokemonEggGroupsUncheckedCreateNestedManyWithoutSpeciesInput>;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutEvolvedSpeciesInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionUncheckedCreateNestedManyWithoutEvolvedSpeciesInput>;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutPartySpeciesInput, {nullable:true})
    partySpecies?: Identity<PokemonEvolutionUncheckedCreateNestedManyWithoutPartySpeciesInput>;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutTradeSpeciesInput, {nullable:true})
    tradeSpecies?: Identity<PokemonEvolutionUncheckedCreateNestedManyWithoutTradeSpeciesInput>;
}

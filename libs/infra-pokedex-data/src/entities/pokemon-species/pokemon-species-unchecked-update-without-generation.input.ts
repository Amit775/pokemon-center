import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedUpdateManyWithoutEvolvesFromNestedInput } from './pokemon-species-unchecked-update-many-without-evolves-from-nested.input';
import { PokemonUncheckedUpdateManyWithoutSpeciesNestedInput } from '../pokemon/pokemon-unchecked-update-many-without-species-nested.input';
import { PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-update-many-without-species-nested.input';
import { PokemonDexNumbersUncheckedUpdateManyWithoutSpeciesNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-unchecked-update-many-without-species-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-evolved-species-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutPartySpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-party-species-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-trade-species-nested.input';

@InputType()
export class PokemonSpeciesUncheckedUpdateWithoutGenerationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    evolves_from_species_id?: number;

    @Field(() => Int, {nullable:true})
    evolution_chain_id?: number;

    @Field(() => Int, {nullable:true})
    color_id?: number;

    @Field(() => Int, {nullable:true})
    shape_id?: number;

    @Field(() => Int, {nullable:true})
    habitat_id?: number;

    @Field(() => Int, {nullable:true})
    gender_rate?: number;

    @Field(() => Int, {nullable:true})
    capture_rate?: number;

    @Field(() => Int, {nullable:true})
    base_happiness?: number;

    @Field(() => Int, {nullable:true})
    is_baby?: number;

    @Field(() => Int, {nullable:true})
    hatch_counter?: number;

    @Field(() => Int, {nullable:true})
    has_gender_differences?: number;

    @Field(() => Int, {nullable:true})
    growth_rate_id?: number;

    @Field(() => Int, {nullable:true})
    forms_switchable?: number;

    @Field(() => Int, {nullable:true})
    is_legendary?: number;

    @Field(() => Int, {nullable:true})
    is_mythical?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    conquest_order?: number;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutEvolvesFromNestedInput, {nullable:true})
    evolvesTo?: Identity<PokemonSpeciesUncheckedUpdateManyWithoutEvolvesFromNestedInput>;

    @Field(() => PokemonUncheckedUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUncheckedUpdateManyWithoutSpeciesNestedInput>;

    @Field(() => PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    eggGroups?: Identity<PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesNestedInput>;

    @Field(() => PokemonDexNumbersUncheckedUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    dexNumbers?: Identity<PokemonDexNumbersUncheckedUpdateManyWithoutSpeciesNestedInput>;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesNestedInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesNestedInput>;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutPartySpeciesNestedInput, {nullable:true})
    partySpecies?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutPartySpeciesNestedInput>;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesNestedInput, {nullable:true})
    tradeSpecies?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesNestedInput>;
}

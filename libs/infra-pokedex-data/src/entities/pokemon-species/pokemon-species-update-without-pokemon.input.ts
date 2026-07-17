import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput } from '../generations/generations-update-one-required-without-pokemon-species-nested.input';
import { PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput } from './pokemon-species-update-one-without-evolves-to-nested.input';
import { PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput } from './pokemon-species-update-many-without-evolves-from-nested.input';
import { EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput } from '../evolution-chains/evolution-chains-update-one-required-without-species-nested.input';
import { PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput } from '../pokemon-colors/pokemon-colors-update-one-required-without-species-nested.input';
import { PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput } from '../pokemon-shapes/pokemon-shapes-update-one-required-without-species-nested.input';
import { PokemonHabitatsUpdateOneWithoutSpeciesNestedInput } from '../pokemon-habitats/pokemon-habitats-update-one-without-species-nested.input';
import { GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput } from '../growth-rates/growth-rates-update-one-required-without-species-nested.input';
import { PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-update-many-without-species-nested.input';
import { PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update-many-without-species-nested.input';
import { PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-evolved-species-nested.input';
import { PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-party-species-nested.input';
import { PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-trade-species-nested.input';

@InputType()
export class PokemonSpeciesUpdateWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

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
    forms_switchable?: number;

    @Field(() => Int, {nullable:true})
    is_legendary?: number;

    @Field(() => Int, {nullable:true})
    is_mythical?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    conquest_order?: number;

    @Field(() => GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput>;

    @Field(() => PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput, {nullable:true})
    evolvesFrom?: Identity<PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput>;

    @Field(() => PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput, {nullable:true})
    evolvesTo?: Identity<PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput>;

    @Field(() => EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    evolutionChain?: Identity<EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput>;

    @Field(() => PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    color?: Identity<PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput>;

    @Field(() => PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    shape?: Identity<PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput>;

    @Field(() => PokemonHabitatsUpdateOneWithoutSpeciesNestedInput, {nullable:true})
    habitat?: Identity<PokemonHabitatsUpdateOneWithoutSpeciesNestedInput>;

    @Field(() => GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    growthRate?: Identity<GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput>;

    @Field(() => PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    eggGroups?: Identity<PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput>;

    @Field(() => PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    dexNumbers?: Identity<PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput>;

    @Field(() => PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput>;

    @Field(() => PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput, {nullable:true})
    partySpecies?: Identity<PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput>;

    @Field(() => PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput, {nullable:true})
    tradeSpecies?: Identity<PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput>;
}

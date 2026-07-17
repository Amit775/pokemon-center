import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsCreateNestedOneWithoutPokemonSpeciesInput } from '../generations/generations-create-nested-one-without-pokemon-species.input';
import { PokemonSpeciesCreateNestedOneWithoutEvolvesToInput } from './pokemon-species-create-nested-one-without-evolves-to.input';
import { PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput } from './pokemon-species-create-nested-many-without-evolves-from.input';
import { EvolutionChainsCreateNestedOneWithoutSpeciesInput } from '../evolution-chains/evolution-chains-create-nested-one-without-species.input';
import { PokemonColorsCreateNestedOneWithoutSpeciesInput } from '../pokemon-colors/pokemon-colors-create-nested-one-without-species.input';
import { PokemonShapesCreateNestedOneWithoutSpeciesInput } from '../pokemon-shapes/pokemon-shapes-create-nested-one-without-species.input';
import { PokemonHabitatsCreateNestedOneWithoutSpeciesInput } from '../pokemon-habitats/pokemon-habitats-create-nested-one-without-species.input';
import { GrowthRatesCreateNestedOneWithoutSpeciesInput } from '../growth-rates/growth-rates-create-nested-one-without-species.input';
import { PokemonCreateNestedManyWithoutSpeciesInput } from '../pokemon/pokemon-create-nested-many-without-species.input';
import { PokemonEggGroupsCreateNestedManyWithoutSpeciesInput } from '../pokemon-egg-groups/pokemon-egg-groups-create-nested-many-without-species.input';
import { PokemonDexNumbersCreateNestedManyWithoutSpeciesInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-create-nested-many-without-species.input';
import { PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-evolved-species.input';
import { PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-party-species.input';
import { PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-trade-species.input';

@InputType()
export class PokemonSpeciesCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

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
    forms_switchable!: number;

    @Field(() => Int, {nullable:false})
    is_legendary!: number;

    @Field(() => Int, {nullable:false})
    is_mythical!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:true})
    conquest_order?: number;

    @Field(() => GenerationsCreateNestedOneWithoutPokemonSpeciesInput, {nullable:false})
    generation!: GenerationsCreateNestedOneWithoutPokemonSpeciesInput;

    @Field(() => PokemonSpeciesCreateNestedOneWithoutEvolvesToInput, {nullable:true})
    evolvesFrom?: PokemonSpeciesCreateNestedOneWithoutEvolvesToInput;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput, {nullable:true})
    evolvesTo?: PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput;

    @Field(() => EvolutionChainsCreateNestedOneWithoutSpeciesInput, {nullable:false})
    evolutionChain!: EvolutionChainsCreateNestedOneWithoutSpeciesInput;

    @Field(() => PokemonColorsCreateNestedOneWithoutSpeciesInput, {nullable:false})
    color!: PokemonColorsCreateNestedOneWithoutSpeciesInput;

    @Field(() => PokemonShapesCreateNestedOneWithoutSpeciesInput, {nullable:false})
    shape!: PokemonShapesCreateNestedOneWithoutSpeciesInput;

    @Field(() => PokemonHabitatsCreateNestedOneWithoutSpeciesInput, {nullable:true})
    habitat?: PokemonHabitatsCreateNestedOneWithoutSpeciesInput;

    @Field(() => GrowthRatesCreateNestedOneWithoutSpeciesInput, {nullable:false})
    growthRate!: GrowthRatesCreateNestedOneWithoutSpeciesInput;

    @Field(() => PokemonCreateNestedManyWithoutSpeciesInput, {nullable:true})
    pokemon?: PokemonCreateNestedManyWithoutSpeciesInput;

    @Field(() => PokemonEggGroupsCreateNestedManyWithoutSpeciesInput, {nullable:true})
    eggGroups?: PokemonEggGroupsCreateNestedManyWithoutSpeciesInput;

    @Field(() => PokemonDexNumbersCreateNestedManyWithoutSpeciesInput, {nullable:true})
    dexNumbers?: PokemonDexNumbersCreateNestedManyWithoutSpeciesInput;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput, {nullable:true})
    evolution?: PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput, {nullable:true})
    partySpecies?: PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput, {nullable:true})
    tradeSpecies?: PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput;
}

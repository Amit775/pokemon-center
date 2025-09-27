import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Generations } from '../generations/generations.model';
import { EvolutionChains } from '../evolution-chains/evolution-chains.model';
import { PokemonColors } from '../pokemon-colors/pokemon-colors.model';
import { PokemonShapes } from '../pokemon-shapes/pokemon-shapes.model';
import { PokemonHabitats } from '../pokemon-habitats/pokemon-habitats.model';
import { GrowthRates } from '../growth-rates/growth-rates.model';
import { Pokemon } from '../pokemon/pokemon.model';
import { PokemonEggGroups } from '../pokemon-egg-groups/pokemon-egg-groups.model';
import { PokemonDexNumbers } from '../pokemon-dex-numbers/pokemon-dex-numbers.model';
import { PokemonEvolution } from '../pokemon-evolution/pokemon-evolution.model';
import { PokemonSpeciesCount } from './pokemon-species-count.output';

@ObjectType()
export class PokemonSpecies {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:true})
    evolves_from_species_id!: number | null;

    @Field(() => Int, {nullable:false})
    evolution_chain_id!: number;

    @Field(() => Int, {nullable:false})
    color_id!: number;

    @Field(() => Int, {nullable:false})
    shape_id!: number;

    @Field(() => Int, {nullable:true})
    habitat_id!: number | null;

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
    conquest_order!: number | null;

    @Field(() => Generations, {nullable:false})
    generation?: Generations;

    @Field(() => PokemonSpecies, {nullable:true})
    evolvesFrom?: PokemonSpecies | null;

    @Field(() => [PokemonSpecies], {nullable:true})
    evolvesTo?: Array<PokemonSpecies>;

    @Field(() => EvolutionChains, {nullable:false})
    evolutionChain?: EvolutionChains;

    @Field(() => PokemonColors, {nullable:false})
    color?: PokemonColors;

    @Field(() => PokemonShapes, {nullable:false})
    shape?: PokemonShapes;

    @Field(() => PokemonHabitats, {nullable:true})
    habitat?: PokemonHabitats | null;

    @Field(() => GrowthRates, {nullable:false})
    growthRate?: GrowthRates;

    @Field(() => [Pokemon], {nullable:true})
    pokemon?: Array<Pokemon>;

    @Field(() => [PokemonEggGroups], {nullable:true})
    eggGroups?: Array<PokemonEggGroups>;

    @Field(() => [PokemonDexNumbers], {nullable:true})
    dexNumbers?: Array<PokemonDexNumbers>;

    @Field(() => [PokemonEvolution], {nullable:true})
    evolution?: Array<PokemonEvolution>;

    @Field(() => [PokemonEvolution], {nullable:true})
    partySpecies?: Array<PokemonEvolution>;

    @Field(() => [PokemonEvolution], {nullable:true})
    tradeSpecies?: Array<PokemonEvolution>;

    @Field(() => PokemonSpeciesCount, {nullable:false})
    _count?: PokemonSpeciesCount;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesCountAggregate } from './pokemon-species-count-aggregate.output';
import { PokemonSpeciesAvgAggregate } from './pokemon-species-avg-aggregate.output';
import { PokemonSpeciesSumAggregate } from './pokemon-species-sum-aggregate.output';
import { PokemonSpeciesMinAggregate } from './pokemon-species-min-aggregate.output';
import { PokemonSpeciesMaxAggregate } from './pokemon-species-max-aggregate.output';

@ObjectType()
export class PokemonSpeciesGroupBy {

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

    @Field(() => PokemonSpeciesCountAggregate, {nullable:true})
    _count?: PokemonSpeciesCountAggregate;

    @Field(() => PokemonSpeciesAvgAggregate, {nullable:true})
    _avg?: PokemonSpeciesAvgAggregate;

    @Field(() => PokemonSpeciesSumAggregate, {nullable:true})
    _sum?: PokemonSpeciesSumAggregate;

    @Field(() => PokemonSpeciesMinAggregate, {nullable:true})
    _min?: PokemonSpeciesMinAggregate;

    @Field(() => PokemonSpeciesMaxAggregate, {nullable:true})
    _max?: PokemonSpeciesMaxAggregate;
}

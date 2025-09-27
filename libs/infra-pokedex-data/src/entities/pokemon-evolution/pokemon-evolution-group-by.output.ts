import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonEvolutionCountAggregate } from './pokemon-evolution-count-aggregate.output';
import { PokemonEvolutionAvgAggregate } from './pokemon-evolution-avg-aggregate.output';
import { PokemonEvolutionSumAggregate } from './pokemon-evolution-sum-aggregate.output';
import { PokemonEvolutionMinAggregate } from './pokemon-evolution-min-aggregate.output';
import { PokemonEvolutionMaxAggregate } from './pokemon-evolution-max-aggregate.output';

@ObjectType()
export class PokemonEvolutionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    evolved_species_id!: number;

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:true})
    trigger_item_id?: number;

    @Field(() => Int, {nullable:true})
    minimum_level?: number;

    @Field(() => Int, {nullable:true})
    gender_id?: number;

    @Field(() => Int, {nullable:true})
    location_id?: number;

    @Field(() => Int, {nullable:true})
    held_item_id?: number;

    @Field(() => String, {nullable:true})
    time_of_day?: string;

    @Field(() => Int, {nullable:true})
    known_move_id?: number;

    @Field(() => Int, {nullable:true})
    known_move_type_id?: number;

    @Field(() => Int, {nullable:true})
    minimum_happiness?: number;

    @Field(() => Int, {nullable:true})
    minimum_beauty?: number;

    @Field(() => Int, {nullable:true})
    minimum_affection?: number;

    @Field(() => Int, {nullable:true})
    relative_physical_stats?: number;

    @Field(() => Int, {nullable:true})
    party_species_id?: number;

    @Field(() => Int, {nullable:true})
    party_type_id?: number;

    @Field(() => Int, {nullable:true})
    trade_species_id?: number;

    @Field(() => Int, {nullable:false})
    needs_overworld_rain!: number;

    @Field(() => Int, {nullable:false})
    turn_upside_down!: number;

    @Field(() => PokemonEvolutionCountAggregate, {nullable:true})
    _count?: PokemonEvolutionCountAggregate;

    @Field(() => PokemonEvolutionAvgAggregate, {nullable:true})
    _avg?: PokemonEvolutionAvgAggregate;

    @Field(() => PokemonEvolutionSumAggregate, {nullable:true})
    _sum?: PokemonEvolutionSumAggregate;

    @Field(() => PokemonEvolutionMinAggregate, {nullable:true})
    _min?: PokemonEvolutionMinAggregate;

    @Field(() => PokemonEvolutionMaxAggregate, {nullable:true})
    _max?: PokemonEvolutionMaxAggregate;
}

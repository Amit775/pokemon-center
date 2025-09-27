import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonStatsCountAggregate } from './pokemon-stats-count-aggregate.output';
import { PokemonStatsAvgAggregate } from './pokemon-stats-avg-aggregate.output';
import { PokemonStatsSumAggregate } from './pokemon-stats-sum-aggregate.output';
import { PokemonStatsMinAggregate } from './pokemon-stats-min-aggregate.output';
import { PokemonStatsMaxAggregate } from './pokemon-stats-max-aggregate.output';

@ObjectType()
export class PokemonStatsGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    effort!: number;

    @Field(() => PokemonStatsCountAggregate, {nullable:true})
    _count?: PokemonStatsCountAggregate;

    @Field(() => PokemonStatsAvgAggregate, {nullable:true})
    _avg?: PokemonStatsAvgAggregate;

    @Field(() => PokemonStatsSumAggregate, {nullable:true})
    _sum?: PokemonStatsSumAggregate;

    @Field(() => PokemonStatsMinAggregate, {nullable:true})
    _min?: PokemonStatsMinAggregate;

    @Field(() => PokemonStatsMaxAggregate, {nullable:true})
    _max?: PokemonStatsMaxAggregate;
}

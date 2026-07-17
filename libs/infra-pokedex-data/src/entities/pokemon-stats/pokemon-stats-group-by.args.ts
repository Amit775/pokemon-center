import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsWhereInput } from './pokemon-stats-where.input';
import { Type } from 'class-transformer';
import { PokemonStatsOrderByWithAggregationInput } from './pokemon-stats-order-by-with-aggregation.input';
import { PokemonStatsScalarFieldEnum } from './pokemon-stats-scalar-field.enum';
import { PokemonStatsScalarWhereWithAggregatesInput } from './pokemon-stats-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonStatsCountAggregateInput } from './pokemon-stats-count-aggregate.input';
import { PokemonStatsAvgAggregateInput } from './pokemon-stats-avg-aggregate.input';
import { PokemonStatsSumAggregateInput } from './pokemon-stats-sum-aggregate.input';
import { PokemonStatsMinAggregateInput } from './pokemon-stats-min-aggregate.input';
import { PokemonStatsMaxAggregateInput } from './pokemon-stats-max-aggregate.input';

@ArgsType()
export class PokemonStatsGroupByArgs {

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    @Type(() => PokemonStatsWhereInput)
    where?: Identity<PokemonStatsWhereInput>;

    @Field(() => [PokemonStatsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonStatsOrderByWithAggregationInput>;

    @Field(() => [PokemonStatsScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonStatsScalarFieldEnum}`>;

    @Field(() => PokemonStatsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<PokemonStatsScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonStatsCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonStatsCountAggregateInput>;

    @Field(() => PokemonStatsAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonStatsAvgAggregateInput>;

    @Field(() => PokemonStatsSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonStatsSumAggregateInput>;

    @Field(() => PokemonStatsMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonStatsMinAggregateInput>;

    @Field(() => PokemonStatsMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonStatsMaxAggregateInput>;
}

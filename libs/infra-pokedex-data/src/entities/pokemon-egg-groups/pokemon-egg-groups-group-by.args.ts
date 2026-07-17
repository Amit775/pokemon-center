import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsWhereInput } from './pokemon-egg-groups-where.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsOrderByWithAggregationInput } from './pokemon-egg-groups-order-by-with-aggregation.input';
import { PokemonEggGroupsScalarFieldEnum } from './pokemon-egg-groups-scalar-field.enum';
import { PokemonEggGroupsScalarWhereWithAggregatesInput } from './pokemon-egg-groups-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonEggGroupsCountAggregateInput } from './pokemon-egg-groups-count-aggregate.input';
import { PokemonEggGroupsAvgAggregateInput } from './pokemon-egg-groups-avg-aggregate.input';
import { PokemonEggGroupsSumAggregateInput } from './pokemon-egg-groups-sum-aggregate.input';
import { PokemonEggGroupsMinAggregateInput } from './pokemon-egg-groups-min-aggregate.input';
import { PokemonEggGroupsMaxAggregateInput } from './pokemon-egg-groups-max-aggregate.input';

@ArgsType()
export class PokemonEggGroupsGroupByArgs {

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    @Type(() => PokemonEggGroupsWhereInput)
    where?: Identity<PokemonEggGroupsWhereInput>;

    @Field(() => [PokemonEggGroupsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonEggGroupsOrderByWithAggregationInput>;

    @Field(() => [PokemonEggGroupsScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonEggGroupsScalarFieldEnum}`>;

    @Field(() => PokemonEggGroupsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<PokemonEggGroupsScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonEggGroupsCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonEggGroupsCountAggregateInput>;

    @Field(() => PokemonEggGroupsAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonEggGroupsAvgAggregateInput>;

    @Field(() => PokemonEggGroupsSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonEggGroupsSumAggregateInput>;

    @Field(() => PokemonEggGroupsMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonEggGroupsMinAggregateInput>;

    @Field(() => PokemonEggGroupsMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonEggGroupsMaxAggregateInput>;
}

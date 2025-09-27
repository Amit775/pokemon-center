import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
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
    where?: PokemonEggGroupsWhereInput;

    @Field(() => [PokemonEggGroupsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonEggGroupsOrderByWithAggregationInput>;

    @Field(() => [PokemonEggGroupsScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonEggGroupsScalarFieldEnum}`>;

    @Field(() => PokemonEggGroupsScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokemonEggGroupsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonEggGroupsCountAggregateInput, {nullable:true})
    _count?: PokemonEggGroupsCountAggregateInput;

    @Field(() => PokemonEggGroupsAvgAggregateInput, {nullable:true})
    _avg?: PokemonEggGroupsAvgAggregateInput;

    @Field(() => PokemonEggGroupsSumAggregateInput, {nullable:true})
    _sum?: PokemonEggGroupsSumAggregateInput;

    @Field(() => PokemonEggGroupsMinAggregateInput, {nullable:true})
    _min?: PokemonEggGroupsMinAggregateInput;

    @Field(() => PokemonEggGroupsMaxAggregateInput, {nullable:true})
    _max?: PokemonEggGroupsMaxAggregateInput;
}

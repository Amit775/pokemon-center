import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexVersionGroupsWhereInput } from './pokedex-version-groups-where.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsOrderByWithAggregationInput } from './pokedex-version-groups-order-by-with-aggregation.input';
import { PokedexVersionGroupsScalarFieldEnum } from './pokedex-version-groups-scalar-field.enum';
import { PokedexVersionGroupsScalarWhereWithAggregatesInput } from './pokedex-version-groups-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokedexVersionGroupsCountAggregateInput } from './pokedex-version-groups-count-aggregate.input';
import { PokedexVersionGroupsAvgAggregateInput } from './pokedex-version-groups-avg-aggregate.input';
import { PokedexVersionGroupsSumAggregateInput } from './pokedex-version-groups-sum-aggregate.input';
import { PokedexVersionGroupsMinAggregateInput } from './pokedex-version-groups-min-aggregate.input';
import { PokedexVersionGroupsMaxAggregateInput } from './pokedex-version-groups-max-aggregate.input';

@ArgsType()
export class PokedexVersionGroupsGroupByArgs {

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    @Type(() => PokedexVersionGroupsWhereInput)
    where?: PokedexVersionGroupsWhereInput;

    @Field(() => [PokedexVersionGroupsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokedexVersionGroupsOrderByWithAggregationInput>;

    @Field(() => [PokedexVersionGroupsScalarFieldEnum], {nullable:false})
    by!: Array<`${PokedexVersionGroupsScalarFieldEnum}`>;

    @Field(() => PokedexVersionGroupsScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokedexVersionGroupsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokedexVersionGroupsCountAggregateInput, {nullable:true})
    _count?: PokedexVersionGroupsCountAggregateInput;

    @Field(() => PokedexVersionGroupsAvgAggregateInput, {nullable:true})
    _avg?: PokedexVersionGroupsAvgAggregateInput;

    @Field(() => PokedexVersionGroupsSumAggregateInput, {nullable:true})
    _sum?: PokedexVersionGroupsSumAggregateInput;

    @Field(() => PokedexVersionGroupsMinAggregateInput, {nullable:true})
    _min?: PokedexVersionGroupsMinAggregateInput;

    @Field(() => PokedexVersionGroupsMaxAggregateInput, {nullable:true})
    _max?: PokedexVersionGroupsMaxAggregateInput;
}

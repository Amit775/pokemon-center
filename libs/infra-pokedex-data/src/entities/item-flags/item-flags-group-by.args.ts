import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagsWhereInput } from './item-flags-where.input';
import { Type } from 'class-transformer';
import { ItemFlagsOrderByWithAggregationInput } from './item-flags-order-by-with-aggregation.input';
import { ItemFlagsScalarFieldEnum } from './item-flags-scalar-field.enum';
import { ItemFlagsScalarWhereWithAggregatesInput } from './item-flags-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ItemFlagsCountAggregateInput } from './item-flags-count-aggregate.input';
import { ItemFlagsAvgAggregateInput } from './item-flags-avg-aggregate.input';
import { ItemFlagsSumAggregateInput } from './item-flags-sum-aggregate.input';
import { ItemFlagsMinAggregateInput } from './item-flags-min-aggregate.input';
import { ItemFlagsMaxAggregateInput } from './item-flags-max-aggregate.input';

@ArgsType()
export class ItemFlagsGroupByArgs {

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    @Type(() => ItemFlagsWhereInput)
    where?: Identity<ItemFlagsWhereInput>;

    @Field(() => [ItemFlagsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemFlagsOrderByWithAggregationInput>;

    @Field(() => [ItemFlagsScalarFieldEnum], {nullable:false})
    by!: Array<`${ItemFlagsScalarFieldEnum}`>;

    @Field(() => ItemFlagsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<ItemFlagsScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemFlagsCountAggregateInput, {nullable:true})
    _count?: Identity<ItemFlagsCountAggregateInput>;

    @Field(() => ItemFlagsAvgAggregateInput, {nullable:true})
    _avg?: Identity<ItemFlagsAvgAggregateInput>;

    @Field(() => ItemFlagsSumAggregateInput, {nullable:true})
    _sum?: Identity<ItemFlagsSumAggregateInput>;

    @Field(() => ItemFlagsMinAggregateInput, {nullable:true})
    _min?: Identity<ItemFlagsMinAggregateInput>;

    @Field(() => ItemFlagsMaxAggregateInput, {nullable:true})
    _max?: Identity<ItemFlagsMaxAggregateInput>;
}

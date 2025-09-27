import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagMapWhereInput } from './item-flag-map-where.input';
import { Type } from 'class-transformer';
import { ItemFlagMapOrderByWithAggregationInput } from './item-flag-map-order-by-with-aggregation.input';
import { ItemFlagMapScalarFieldEnum } from './item-flag-map-scalar-field.enum';
import { ItemFlagMapScalarWhereWithAggregatesInput } from './item-flag-map-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ItemFlagMapCountAggregateInput } from './item-flag-map-count-aggregate.input';
import { ItemFlagMapAvgAggregateInput } from './item-flag-map-avg-aggregate.input';
import { ItemFlagMapSumAggregateInput } from './item-flag-map-sum-aggregate.input';
import { ItemFlagMapMinAggregateInput } from './item-flag-map-min-aggregate.input';
import { ItemFlagMapMaxAggregateInput } from './item-flag-map-max-aggregate.input';

@ArgsType()
export class ItemFlagMapGroupByArgs {

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    @Type(() => ItemFlagMapWhereInput)
    where?: ItemFlagMapWhereInput;

    @Field(() => [ItemFlagMapOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemFlagMapOrderByWithAggregationInput>;

    @Field(() => [ItemFlagMapScalarFieldEnum], {nullable:false})
    by!: Array<`${ItemFlagMapScalarFieldEnum}`>;

    @Field(() => ItemFlagMapScalarWhereWithAggregatesInput, {nullable:true})
    having?: ItemFlagMapScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemFlagMapCountAggregateInput, {nullable:true})
    _count?: ItemFlagMapCountAggregateInput;

    @Field(() => ItemFlagMapAvgAggregateInput, {nullable:true})
    _avg?: ItemFlagMapAvgAggregateInput;

    @Field(() => ItemFlagMapSumAggregateInput, {nullable:true})
    _sum?: ItemFlagMapSumAggregateInput;

    @Field(() => ItemFlagMapMinAggregateInput, {nullable:true})
    _min?: ItemFlagMapMinAggregateInput;

    @Field(() => ItemFlagMapMaxAggregateInput, {nullable:true})
    _max?: ItemFlagMapMaxAggregateInput;
}

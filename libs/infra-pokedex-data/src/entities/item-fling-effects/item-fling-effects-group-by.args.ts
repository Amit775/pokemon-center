import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsOrderByWithAggregationInput } from './item-fling-effects-order-by-with-aggregation.input';
import { ItemFlingEffectsScalarFieldEnum } from './item-fling-effects-scalar-field.enum';
import { ItemFlingEffectsScalarWhereWithAggregatesInput } from './item-fling-effects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ItemFlingEffectsCountAggregateInput } from './item-fling-effects-count-aggregate.input';
import { ItemFlingEffectsAvgAggregateInput } from './item-fling-effects-avg-aggregate.input';
import { ItemFlingEffectsSumAggregateInput } from './item-fling-effects-sum-aggregate.input';
import { ItemFlingEffectsMinAggregateInput } from './item-fling-effects-min-aggregate.input';
import { ItemFlingEffectsMaxAggregateInput } from './item-fling-effects-max-aggregate.input';

@ArgsType()
export class ItemFlingEffectsGroupByArgs {

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    where?: Identity<ItemFlingEffectsWhereInput>;

    @Field(() => [ItemFlingEffectsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemFlingEffectsOrderByWithAggregationInput>;

    @Field(() => [ItemFlingEffectsScalarFieldEnum], {nullable:false})
    by!: Array<`${ItemFlingEffectsScalarFieldEnum}`>;

    @Field(() => ItemFlingEffectsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<ItemFlingEffectsScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemFlingEffectsCountAggregateInput, {nullable:true})
    _count?: Identity<ItemFlingEffectsCountAggregateInput>;

    @Field(() => ItemFlingEffectsAvgAggregateInput, {nullable:true})
    _avg?: Identity<ItemFlingEffectsAvgAggregateInput>;

    @Field(() => ItemFlingEffectsSumAggregateInput, {nullable:true})
    _sum?: Identity<ItemFlingEffectsSumAggregateInput>;

    @Field(() => ItemFlingEffectsMinAggregateInput, {nullable:true})
    _min?: Identity<ItemFlingEffectsMinAggregateInput>;

    @Field(() => ItemFlingEffectsMaxAggregateInput, {nullable:true})
    _max?: Identity<ItemFlingEffectsMaxAggregateInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsCountOrderByAggregateInput } from './item-fling-effects-count-order-by-aggregate.input';
import { ItemFlingEffectsAvgOrderByAggregateInput } from './item-fling-effects-avg-order-by-aggregate.input';
import { ItemFlingEffectsMaxOrderByAggregateInput } from './item-fling-effects-max-order-by-aggregate.input';
import { ItemFlingEffectsMinOrderByAggregateInput } from './item-fling-effects-min-order-by-aggregate.input';
import { ItemFlingEffectsSumOrderByAggregateInput } from './item-fling-effects-sum-order-by-aggregate.input';

@InputType()
export class ItemFlingEffectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => ItemFlingEffectsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<ItemFlingEffectsCountOrderByAggregateInput>;

    @Field(() => ItemFlingEffectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<ItemFlingEffectsAvgOrderByAggregateInput>;

    @Field(() => ItemFlingEffectsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<ItemFlingEffectsMaxOrderByAggregateInput>;

    @Field(() => ItemFlingEffectsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<ItemFlingEffectsMinOrderByAggregateInput>;

    @Field(() => ItemFlingEffectsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<ItemFlingEffectsSumOrderByAggregateInput>;
}

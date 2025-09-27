import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    _count?: ItemFlingEffectsCountOrderByAggregateInput;

    @Field(() => ItemFlingEffectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: ItemFlingEffectsAvgOrderByAggregateInput;

    @Field(() => ItemFlingEffectsMaxOrderByAggregateInput, {nullable:true})
    _max?: ItemFlingEffectsMaxOrderByAggregateInput;

    @Field(() => ItemFlingEffectsMinOrderByAggregateInput, {nullable:true})
    _min?: ItemFlingEffectsMinOrderByAggregateInput;

    @Field(() => ItemFlingEffectsSumOrderByAggregateInput, {nullable:true})
    _sum?: ItemFlingEffectsSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ItemsCountOrderByAggregateInput } from './items-count-order-by-aggregate.input';
import { ItemsAvgOrderByAggregateInput } from './items-avg-order-by-aggregate.input';
import { ItemsMaxOrderByAggregateInput } from './items-max-order-by-aggregate.input';
import { ItemsMinOrderByAggregateInput } from './items-min-order-by-aggregate.input';
import { ItemsSumOrderByAggregateInput } from './items-sum-order-by-aggregate.input';

@InputType()
export class ItemsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    category_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    cost?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    fling_power?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    fling_effect_id?: Identity<SortOrderInput>;

    @Field(() => ItemsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<ItemsCountOrderByAggregateInput>;

    @Field(() => ItemsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<ItemsAvgOrderByAggregateInput>;

    @Field(() => ItemsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<ItemsMaxOrderByAggregateInput>;

    @Field(() => ItemsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<ItemsMinOrderByAggregateInput>;

    @Field(() => ItemsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<ItemsSumOrderByAggregateInput>;
}

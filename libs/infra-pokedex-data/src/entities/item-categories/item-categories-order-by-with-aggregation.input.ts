import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { ItemCategoriesCountOrderByAggregateInput } from './item-categories-count-order-by-aggregate.input';
import { ItemCategoriesAvgOrderByAggregateInput } from './item-categories-avg-order-by-aggregate.input';
import { ItemCategoriesMaxOrderByAggregateInput } from './item-categories-max-order-by-aggregate.input';
import { ItemCategoriesMinOrderByAggregateInput } from './item-categories-min-order-by-aggregate.input';
import { ItemCategoriesSumOrderByAggregateInput } from './item-categories-sum-order-by-aggregate.input';

@InputType()
export class ItemCategoriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pocket_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => ItemCategoriesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<ItemCategoriesCountOrderByAggregateInput>;

    @Field(() => ItemCategoriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<ItemCategoriesAvgOrderByAggregateInput>;

    @Field(() => ItemCategoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<ItemCategoriesMaxOrderByAggregateInput>;

    @Field(() => ItemCategoriesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<ItemCategoriesMinOrderByAggregateInput>;

    @Field(() => ItemCategoriesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<ItemCategoriesSumOrderByAggregateInput>;
}

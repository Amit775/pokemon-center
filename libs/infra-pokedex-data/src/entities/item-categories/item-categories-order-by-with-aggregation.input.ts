import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    _count?: ItemCategoriesCountOrderByAggregateInput;

    @Field(() => ItemCategoriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: ItemCategoriesAvgOrderByAggregateInput;

    @Field(() => ItemCategoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: ItemCategoriesMaxOrderByAggregateInput;

    @Field(() => ItemCategoriesMinOrderByAggregateInput, {nullable:true})
    _min?: ItemCategoriesMinOrderByAggregateInput;

    @Field(() => ItemCategoriesSumOrderByAggregateInput, {nullable:true})
    _sum?: ItemCategoriesSumOrderByAggregateInput;
}

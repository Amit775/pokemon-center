import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { ItemPocketsCountOrderByAggregateInput } from './item-pockets-count-order-by-aggregate.input';
import { ItemPocketsAvgOrderByAggregateInput } from './item-pockets-avg-order-by-aggregate.input';
import { ItemPocketsMaxOrderByAggregateInput } from './item-pockets-max-order-by-aggregate.input';
import { ItemPocketsMinOrderByAggregateInput } from './item-pockets-min-order-by-aggregate.input';
import { ItemPocketsSumOrderByAggregateInput } from './item-pockets-sum-order-by-aggregate.input';

@InputType()
export class ItemPocketsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => ItemPocketsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<ItemPocketsCountOrderByAggregateInput>;

    @Field(() => ItemPocketsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<ItemPocketsAvgOrderByAggregateInput>;

    @Field(() => ItemPocketsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<ItemPocketsMaxOrderByAggregateInput>;

    @Field(() => ItemPocketsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<ItemPocketsMinOrderByAggregateInput>;

    @Field(() => ItemPocketsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<ItemPocketsSumOrderByAggregateInput>;
}

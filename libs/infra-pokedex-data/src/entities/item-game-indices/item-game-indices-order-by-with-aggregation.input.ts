import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ItemGameIndicesCountOrderByAggregateInput } from './item-game-indices-count-order-by-aggregate.input';
import { ItemGameIndicesAvgOrderByAggregateInput } from './item-game-indices-avg-order-by-aggregate.input';
import { ItemGameIndicesMaxOrderByAggregateInput } from './item-game-indices-max-order-by-aggregate.input';
import { ItemGameIndicesMinOrderByAggregateInput } from './item-game-indices-min-order-by-aggregate.input';
import { ItemGameIndicesSumOrderByAggregateInput } from './item-game-indices-sum-order-by-aggregate.input';

@InputType()
export class ItemGameIndicesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => ItemGameIndicesCountOrderByAggregateInput, {nullable:true})
    _count?: ItemGameIndicesCountOrderByAggregateInput;

    @Field(() => ItemGameIndicesAvgOrderByAggregateInput, {nullable:true})
    _avg?: ItemGameIndicesAvgOrderByAggregateInput;

    @Field(() => ItemGameIndicesMaxOrderByAggregateInput, {nullable:true})
    _max?: ItemGameIndicesMaxOrderByAggregateInput;

    @Field(() => ItemGameIndicesMinOrderByAggregateInput, {nullable:true})
    _min?: ItemGameIndicesMinOrderByAggregateInput;

    @Field(() => ItemGameIndicesSumOrderByAggregateInput, {nullable:true})
    _sum?: ItemGameIndicesSumOrderByAggregateInput;
}

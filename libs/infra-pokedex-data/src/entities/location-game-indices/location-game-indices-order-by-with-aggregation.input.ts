import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { LocationGameIndicesCountOrderByAggregateInput } from './location-game-indices-count-order-by-aggregate.input';
import { LocationGameIndicesAvgOrderByAggregateInput } from './location-game-indices-avg-order-by-aggregate.input';
import { LocationGameIndicesMaxOrderByAggregateInput } from './location-game-indices-max-order-by-aggregate.input';
import { LocationGameIndicesMinOrderByAggregateInput } from './location-game-indices-min-order-by-aggregate.input';
import { LocationGameIndicesSumOrderByAggregateInput } from './location-game-indices-sum-order-by-aggregate.input';

@InputType()
export class LocationGameIndicesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    location_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => LocationGameIndicesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<LocationGameIndicesCountOrderByAggregateInput>;

    @Field(() => LocationGameIndicesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<LocationGameIndicesAvgOrderByAggregateInput>;

    @Field(() => LocationGameIndicesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<LocationGameIndicesMaxOrderByAggregateInput>;

    @Field(() => LocationGameIndicesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<LocationGameIndicesMinOrderByAggregateInput>;

    @Field(() => LocationGameIndicesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<LocationGameIndicesSumOrderByAggregateInput>;
}

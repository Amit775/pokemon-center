import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LocationAreasCountOrderByAggregateInput } from './location-areas-count-order-by-aggregate.input';
import { LocationAreasAvgOrderByAggregateInput } from './location-areas-avg-order-by-aggregate.input';
import { LocationAreasMaxOrderByAggregateInput } from './location-areas-max-order-by-aggregate.input';
import { LocationAreasMinOrderByAggregateInput } from './location-areas-min-order-by-aggregate.input';
import { LocationAreasSumOrderByAggregateInput } from './location-areas-sum-order-by-aggregate.input';

@InputType()
export class LocationAreasOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    location_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    identifier?: SortOrderInput;

    @Field(() => LocationAreasCountOrderByAggregateInput, {nullable:true})
    _count?: LocationAreasCountOrderByAggregateInput;

    @Field(() => LocationAreasAvgOrderByAggregateInput, {nullable:true})
    _avg?: LocationAreasAvgOrderByAggregateInput;

    @Field(() => LocationAreasMaxOrderByAggregateInput, {nullable:true})
    _max?: LocationAreasMaxOrderByAggregateInput;

    @Field(() => LocationAreasMinOrderByAggregateInput, {nullable:true})
    _min?: LocationAreasMinOrderByAggregateInput;

    @Field(() => LocationAreasSumOrderByAggregateInput, {nullable:true})
    _sum?: LocationAreasSumOrderByAggregateInput;
}

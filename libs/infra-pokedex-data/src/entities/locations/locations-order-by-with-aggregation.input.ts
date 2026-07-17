import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LocationsCountOrderByAggregateInput } from './locations-count-order-by-aggregate.input';
import { LocationsAvgOrderByAggregateInput } from './locations-avg-order-by-aggregate.input';
import { LocationsMaxOrderByAggregateInput } from './locations-max-order-by-aggregate.input';
import { LocationsMinOrderByAggregateInput } from './locations-min-order-by-aggregate.input';
import { LocationsSumOrderByAggregateInput } from './locations-sum-order-by-aggregate.input';

@InputType()
export class LocationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    region_id?: Identity<SortOrderInput>;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => LocationsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<LocationsCountOrderByAggregateInput>;

    @Field(() => LocationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<LocationsAvgOrderByAggregateInput>;

    @Field(() => LocationsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<LocationsMaxOrderByAggregateInput>;

    @Field(() => LocationsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<LocationsMinOrderByAggregateInput>;

    @Field(() => LocationsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<LocationsSumOrderByAggregateInput>;
}

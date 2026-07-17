import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesCountOrderByAggregateInput } from './location-area-encounter-rates-count-order-by-aggregate.input';
import { LocationAreaEncounterRatesAvgOrderByAggregateInput } from './location-area-encounter-rates-avg-order-by-aggregate.input';
import { LocationAreaEncounterRatesMaxOrderByAggregateInput } from './location-area-encounter-rates-max-order-by-aggregate.input';
import { LocationAreaEncounterRatesMinOrderByAggregateInput } from './location-area-encounter-rates-min-order-by-aggregate.input';
import { LocationAreaEncounterRatesSumOrderByAggregateInput } from './location-area-encounter-rates-sum-order-by-aggregate.input';

@InputType()
export class LocationAreaEncounterRatesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rate?: `${SortOrder}`;

    @Field(() => LocationAreaEncounterRatesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<LocationAreaEncounterRatesCountOrderByAggregateInput>;

    @Field(() => LocationAreaEncounterRatesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<LocationAreaEncounterRatesAvgOrderByAggregateInput>;

    @Field(() => LocationAreaEncounterRatesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<LocationAreaEncounterRatesMaxOrderByAggregateInput>;

    @Field(() => LocationAreaEncounterRatesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<LocationAreaEncounterRatesMinOrderByAggregateInput>;

    @Field(() => LocationAreaEncounterRatesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<LocationAreaEncounterRatesSumOrderByAggregateInput>;
}

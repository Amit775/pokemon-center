import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    _count?: LocationAreaEncounterRatesCountOrderByAggregateInput;

    @Field(() => LocationAreaEncounterRatesAvgOrderByAggregateInput, {nullable:true})
    _avg?: LocationAreaEncounterRatesAvgOrderByAggregateInput;

    @Field(() => LocationAreaEncounterRatesMaxOrderByAggregateInput, {nullable:true})
    _max?: LocationAreaEncounterRatesMaxOrderByAggregateInput;

    @Field(() => LocationAreaEncounterRatesMinOrderByAggregateInput, {nullable:true})
    _min?: LocationAreaEncounterRatesMinOrderByAggregateInput;

    @Field(() => LocationAreaEncounterRatesSumOrderByAggregateInput, {nullable:true})
    _sum?: LocationAreaEncounterRatesSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LocationsOrderByWithRelationInput } from '../locations/locations-order-by-with-relation.input';
import { EncountersOrderByRelationAggregateInput } from '../encounters/encounters-order-by-relation-aggregate.input';
import { LocationAreaEncounterRatesOrderByRelationAggregateInput } from '../location-area-encounter-rates/location-area-encounter-rates-order-by-relation-aggregate.input';

@InputType()
export class LocationAreasOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    location_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    identifier?: Identity<SortOrderInput>;

    @Field(() => LocationsOrderByWithRelationInput, {nullable:true})
    location?: Identity<LocationsOrderByWithRelationInput>;

    @Field(() => EncountersOrderByRelationAggregateInput, {nullable:true})
    encounters?: Identity<EncountersOrderByRelationAggregateInput>;

    @Field(() => LocationAreaEncounterRatesOrderByRelationAggregateInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesOrderByRelationAggregateInput>;
}

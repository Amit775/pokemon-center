import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EncounterSlotsOrderByRelationAggregateInput } from '../encounter-slots/encounter-slots-order-by-relation-aggregate.input';
import { LocationAreaEncounterRatesOrderByRelationAggregateInput } from '../location-area-encounter-rates/location-area-encounter-rates-order-by-relation-aggregate.input';

@InputType()
export class EncounterMethodsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => EncounterSlotsOrderByRelationAggregateInput, {nullable:true})
    slots?: EncounterSlotsOrderByRelationAggregateInput;

    @Field(() => LocationAreaEncounterRatesOrderByRelationAggregateInput, {nullable:true})
    encounterRates?: LocationAreaEncounterRatesOrderByRelationAggregateInput;
}

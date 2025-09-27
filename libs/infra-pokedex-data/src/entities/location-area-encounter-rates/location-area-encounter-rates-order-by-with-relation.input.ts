import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LocationAreasOrderByWithRelationInput } from '../location-areas/location-areas-order-by-with-relation.input';
import { EncounterMethodsOrderByWithRelationInput } from '../encounter-methods/encounter-methods-order-by-with-relation.input';
import { VersionsOrderByWithRelationInput } from '../versions/versions-order-by-with-relation.input';

@InputType()
export class LocationAreaEncounterRatesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rate?: `${SortOrder}`;

    @Field(() => LocationAreasOrderByWithRelationInput, {nullable:true})
    locationArea?: LocationAreasOrderByWithRelationInput;

    @Field(() => EncounterMethodsOrderByWithRelationInput, {nullable:true})
    encounterMethod?: EncounterMethodsOrderByWithRelationInput;

    @Field(() => VersionsOrderByWithRelationInput, {nullable:true})
    version?: VersionsOrderByWithRelationInput;
}

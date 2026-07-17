import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { VersionsOrderByWithRelationInput } from '../versions/versions-order-by-with-relation.input';
import { LocationAreasOrderByWithRelationInput } from '../location-areas/location-areas-order-by-with-relation.input';
import { EncounterSlotsOrderByWithRelationInput } from '../encounter-slots/encounter-slots-order-by-with-relation.input';
import { PokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { EncounterConditionValueMapOrderByRelationAggregateInput } from '../encounter-condition-value-map/encounter-condition-value-map-order-by-relation-aggregate.input';

@InputType()
export class EncountersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_slot_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    min_level?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_level?: `${SortOrder}`;

    @Field(() => VersionsOrderByWithRelationInput, {nullable:true})
    version?: Identity<VersionsOrderByWithRelationInput>;

    @Field(() => LocationAreasOrderByWithRelationInput, {nullable:true})
    locationArea?: Identity<LocationAreasOrderByWithRelationInput>;

    @Field(() => EncounterSlotsOrderByWithRelationInput, {nullable:true})
    encounterSlot?: Identity<EncounterSlotsOrderByWithRelationInput>;

    @Field(() => PokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: Identity<PokemonOrderByWithRelationInput>;

    @Field(() => EncounterConditionValueMapOrderByRelationAggregateInput, {nullable:true})
    conditionValueMap?: Identity<EncounterConditionValueMapOrderByRelationAggregateInput>;
}

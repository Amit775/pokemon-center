import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { VersionGroupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { EncounterMethodsOrderByWithRelationInput } from '../encounter-methods/encounter-methods-order-by-with-relation.input';
import { EncountersOrderByRelationAggregateInput } from '../encounters/encounters-order-by-relation-aggregate.input';

@InputType()
export class EncounterSlotsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    slot?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    rarity?: `${SortOrder}`;

    @Field(() => VersionGroupsOrderByWithRelationInput, {nullable:true})
    versionGroup?: VersionGroupsOrderByWithRelationInput;

    @Field(() => EncounterMethodsOrderByWithRelationInput, {nullable:true})
    encounterMethod?: EncounterMethodsOrderByWithRelationInput;

    @Field(() => EncountersOrderByRelationAggregateInput, {nullable:true})
    encounters?: EncountersOrderByRelationAggregateInput;
}

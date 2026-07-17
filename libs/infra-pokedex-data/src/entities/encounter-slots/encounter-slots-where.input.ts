import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';
import { EncounterMethodsScalarRelationFilter } from '../encounter-methods/encounter-methods-scalar-relation-filter.input';
import { EncountersListRelationFilter } from '../encounters/encounters-list-relation-filter.input';

@InputType()
export class EncounterSlotsWhereInput {

    @Field(() => [EncounterSlotsWhereInput], {nullable:true})
    AND?: Array<EncounterSlotsWhereInput>;

    @Field(() => [EncounterSlotsWhereInput], {nullable:true})
    OR?: Array<EncounterSlotsWhereInput>;

    @Field(() => [EncounterSlotsWhereInput], {nullable:true})
    NOT?: Array<EncounterSlotsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    slot?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    rarity?: Identity<IntFilter>;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: Identity<VersionGroupsScalarRelationFilter>;

    @Field(() => EncounterMethodsScalarRelationFilter, {nullable:true})
    encounterMethod?: Identity<EncounterMethodsScalarRelationFilter>;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: Identity<EncountersListRelationFilter>;
}

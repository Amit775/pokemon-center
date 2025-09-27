import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';
import { EncounterMethodsScalarRelationFilter } from '../encounter-methods/encounter-methods-scalar-relation-filter.input';
import { EncountersListRelationFilter } from '../encounters/encounters-list-relation-filter.input';

@InputType()
export class EncounterSlotsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [EncounterSlotsWhereInput], {nullable:true})
    AND?: Array<EncounterSlotsWhereInput>;

    @Field(() => [EncounterSlotsWhereInput], {nullable:true})
    OR?: Array<EncounterSlotsWhereInput>;

    @Field(() => [EncounterSlotsWhereInput], {nullable:true})
    NOT?: Array<EncounterSlotsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    slot?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    rarity?: IntFilter;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: VersionGroupsScalarRelationFilter;

    @Field(() => EncounterMethodsScalarRelationFilter, {nullable:true})
    encounterMethod?: EncounterMethodsScalarRelationFilter;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: EncountersListRelationFilter;
}

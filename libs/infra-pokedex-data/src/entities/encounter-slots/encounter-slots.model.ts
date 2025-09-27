import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroups } from '../version-groups/version-groups.model';
import { EncounterMethods } from '../encounter-methods/encounter-methods.model';
import { Encounters } from '../encounters/encounters.model';
import { EncounterSlotsCount } from './encounter-slots-count.output';

/**
 * @@TypeGraphQL.type(name: "EncounterSlot")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "EncounterSlot")'})
export class EncounterSlots {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:true})
    slot!: number | null;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => VersionGroups, {nullable:false})
    versionGroup?: VersionGroups;

    @Field(() => EncounterMethods, {nullable:false})
    encounterMethod?: EncounterMethods;

    @Field(() => [Encounters], {nullable:true})
    encounters?: Array<Encounters>;

    @Field(() => EncounterSlotsCount, {nullable:false})
    _count?: EncounterSlotsCount;
}

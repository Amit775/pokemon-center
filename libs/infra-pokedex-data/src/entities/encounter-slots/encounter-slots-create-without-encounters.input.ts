import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateNestedOneWithoutEncounterSlotsInput } from '../version-groups/version-groups-create-nested-one-without-encounter-slots.input';
import { EncounterMethodsCreateNestedOneWithoutSlotsInput } from '../encounter-methods/encounter-methods-create-nested-one-without-slots.input';

@InputType()
export class EncounterSlotsCreateWithoutEncountersInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => VersionGroupsCreateNestedOneWithoutEncounterSlotsInput, {nullable:false})
    versionGroup!: Identity<VersionGroupsCreateNestedOneWithoutEncounterSlotsInput>;

    @Field(() => EncounterMethodsCreateNestedOneWithoutSlotsInput, {nullable:false})
    encounterMethod!: Identity<EncounterMethodsCreateNestedOneWithoutSlotsInput>;
}

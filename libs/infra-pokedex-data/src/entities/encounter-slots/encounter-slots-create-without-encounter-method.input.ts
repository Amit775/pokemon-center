import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateNestedOneWithoutEncounterSlotsInput } from '../version-groups/version-groups-create-nested-one-without-encounter-slots.input';
import { EncountersCreateNestedManyWithoutEncounterSlotInput } from '../encounters/encounters-create-nested-many-without-encounter-slot.input';

@InputType()
export class EncounterSlotsCreateWithoutEncounterMethodInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => VersionGroupsCreateNestedOneWithoutEncounterSlotsInput, {nullable:false})
    versionGroup!: Identity<VersionGroupsCreateNestedOneWithoutEncounterSlotsInput>;

    @Field(() => EncountersCreateNestedManyWithoutEncounterSlotInput, {nullable:true})
    encounters?: Identity<EncountersCreateNestedManyWithoutEncounterSlotInput>;
}

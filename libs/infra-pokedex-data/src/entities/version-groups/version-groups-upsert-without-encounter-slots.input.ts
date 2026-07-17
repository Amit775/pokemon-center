import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateWithoutEncounterSlotsInput } from './version-groups-update-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutEncounterSlotsInput } from './version-groups-create-without-encounter-slots.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutEncounterSlotsInput {

    @Field(() => VersionGroupsUpdateWithoutEncounterSlotsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutEncounterSlotsInput)
    update!: VersionGroupsUpdateWithoutEncounterSlotsInput;

    @Field(() => VersionGroupsCreateWithoutEncounterSlotsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutEncounterSlotsInput)
    create!: VersionGroupsCreateWithoutEncounterSlotsInput;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;
}

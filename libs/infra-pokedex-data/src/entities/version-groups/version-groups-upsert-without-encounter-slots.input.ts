import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateWithoutEncounterSlotsInput } from './version-groups-update-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutEncounterSlotsInput } from './version-groups-create-without-encounter-slots.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutEncounterSlotsInput {

    @Field(() => VersionGroupsUpdateWithoutEncounterSlotsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutEncounterSlotsInput)
    update!: Identity<VersionGroupsUpdateWithoutEncounterSlotsInput>;

    @Field(() => VersionGroupsCreateWithoutEncounterSlotsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutEncounterSlotsInput)
    create!: Identity<VersionGroupsCreateWithoutEncounterSlotsInput>;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;
}

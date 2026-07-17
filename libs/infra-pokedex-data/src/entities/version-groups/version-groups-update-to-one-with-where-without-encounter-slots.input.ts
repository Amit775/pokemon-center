import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutEncounterSlotsInput } from './version-groups-update-without-encounter-slots.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;

    @Field(() => VersionGroupsUpdateWithoutEncounterSlotsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutEncounterSlotsInput)
    data!: Identity<VersionGroupsUpdateWithoutEncounterSlotsInput>;
}

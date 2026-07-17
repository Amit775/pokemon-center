import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutEncounterSlotsInput } from './version-groups-update-without-encounter-slots.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsUpdateWithoutEncounterSlotsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutEncounterSlotsInput)
    data!: VersionGroupsUpdateWithoutEncounterSlotsInput;
}

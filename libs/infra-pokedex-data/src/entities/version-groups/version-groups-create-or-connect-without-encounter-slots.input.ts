import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutEncounterSlotsInput } from './version-groups-create-without-encounter-slots.input';

@InputType()
export class VersionGroupsCreateOrConnectWithoutEncounterSlotsInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateWithoutEncounterSlotsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutEncounterSlotsInput)
    create!: VersionGroupsCreateWithoutEncounterSlotsInput;
}

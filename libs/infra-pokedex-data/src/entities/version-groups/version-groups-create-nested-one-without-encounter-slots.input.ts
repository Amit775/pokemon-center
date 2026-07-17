import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutEncounterSlotsInput } from './version-groups-create-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutEncounterSlotsInput } from './version-groups-create-or-connect-without-encounter-slots.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutEncounterSlotsInput {

    @Field(() => VersionGroupsCreateWithoutEncounterSlotsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutEncounterSlotsInput)
    create?: Identity<VersionGroupsCreateWithoutEncounterSlotsInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutEncounterSlotsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutEncounterSlotsInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutEncounterSlotsInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}

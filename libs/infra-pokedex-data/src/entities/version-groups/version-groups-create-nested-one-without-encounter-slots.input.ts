import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutEncounterSlotsInput } from './version-groups-create-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutEncounterSlotsInput } from './version-groups-create-or-connect-without-encounter-slots.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutEncounterSlotsInput {

    @Field(() => VersionGroupsCreateWithoutEncounterSlotsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutEncounterSlotsInput)
    create?: VersionGroupsCreateWithoutEncounterSlotsInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutEncounterSlotsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutEncounterSlotsInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutEncounterSlotsInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}

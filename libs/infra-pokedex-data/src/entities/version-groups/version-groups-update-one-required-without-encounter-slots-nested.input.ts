import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutEncounterSlotsInput } from './version-groups-create-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutEncounterSlotsInput } from './version-groups-create-or-connect-without-encounter-slots.input';
import { VersionGroupsUpsertWithoutEncounterSlotsInput } from './version-groups-upsert-without-encounter-slots.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput } from './version-groups-update-to-one-with-where-without-encounter-slots.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput {

    @Field(() => VersionGroupsCreateWithoutEncounterSlotsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutEncounterSlotsInput)
    create?: VersionGroupsCreateWithoutEncounterSlotsInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutEncounterSlotsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutEncounterSlotsInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutEncounterSlotsInput;

    @Field(() => VersionGroupsUpsertWithoutEncounterSlotsInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutEncounterSlotsInput)
    upsert?: VersionGroupsUpsertWithoutEncounterSlotsInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput)
    update?: VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutMachinesInput } from './version-groups-create-without-machines.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutMachinesInput } from './version-groups-create-or-connect-without-machines.input';
import { VersionGroupsUpsertWithoutMachinesInput } from './version-groups-upsert-without-machines.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutMachinesInput } from './version-groups-update-to-one-with-where-without-machines.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput {

    @Field(() => VersionGroupsCreateWithoutMachinesInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutMachinesInput)
    create?: Identity<VersionGroupsCreateWithoutMachinesInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutMachinesInput>;

    @Field(() => VersionGroupsUpsertWithoutMachinesInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutMachinesInput)
    upsert?: Identity<VersionGroupsUpsertWithoutMachinesInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutMachinesInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutMachinesInput)
    update?: Identity<VersionGroupsUpdateToOneWithWhereWithoutMachinesInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutMachinesInput } from './version-groups-create-without-machines.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutMachinesInput } from './version-groups-create-or-connect-without-machines.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutMachinesInput {

    @Field(() => VersionGroupsCreateWithoutMachinesInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutMachinesInput)
    create?: VersionGroupsCreateWithoutMachinesInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutMachinesInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}

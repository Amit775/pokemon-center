import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutVersionsInput } from './version-groups-create-without-versions.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutVersionsInput } from './version-groups-create-or-connect-without-versions.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutVersionsInput {

    @Field(() => VersionGroupsCreateWithoutVersionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutVersionsInput)
    create?: Identity<VersionGroupsCreateWithoutVersionsInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutVersionsInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}

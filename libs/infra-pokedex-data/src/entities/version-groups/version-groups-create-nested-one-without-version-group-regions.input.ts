import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutVersionGroupRegionsInput } from './version-groups-create-without-version-group-regions.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput } from './version-groups-create-or-connect-without-version-group-regions.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput {

    @Field(() => VersionGroupsCreateWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutVersionGroupRegionsInput)
    create?: Identity<VersionGroupsCreateWithoutVersionGroupRegionsInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}

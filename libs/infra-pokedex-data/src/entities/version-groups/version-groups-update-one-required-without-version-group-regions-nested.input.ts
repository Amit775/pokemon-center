import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutVersionGroupRegionsInput } from './version-groups-create-without-version-group-regions.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput } from './version-groups-create-or-connect-without-version-group-regions.input';
import { VersionGroupsUpsertWithoutVersionGroupRegionsInput } from './version-groups-upsert-without-version-group-regions.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput } from './version-groups-update-to-one-with-where-without-version-group-regions.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput {

    @Field(() => VersionGroupsCreateWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutVersionGroupRegionsInput)
    create?: Identity<VersionGroupsCreateWithoutVersionGroupRegionsInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput>;

    @Field(() => VersionGroupsUpsertWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutVersionGroupRegionsInput)
    upsert?: Identity<VersionGroupsUpsertWithoutVersionGroupRegionsInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput)
    update?: Identity<VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput>;
}

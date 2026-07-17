import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutVersionGroupRegionsInput } from './version-groups-create-without-version-group-regions.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput } from './version-groups-create-or-connect-without-version-group-regions.input';
import { VersionGroupsUpsertWithoutVersionGroupRegionsInput } from './version-groups-upsert-without-version-group-regions.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput } from './version-groups-update-to-one-with-where-without-version-group-regions.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput {

    @Field(() => VersionGroupsCreateWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutVersionGroupRegionsInput)
    create?: VersionGroupsCreateWithoutVersionGroupRegionsInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput;

    @Field(() => VersionGroupsUpsertWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutVersionGroupRegionsInput)
    upsert?: VersionGroupsUpsertWithoutVersionGroupRegionsInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput)
    update?: VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput;
}

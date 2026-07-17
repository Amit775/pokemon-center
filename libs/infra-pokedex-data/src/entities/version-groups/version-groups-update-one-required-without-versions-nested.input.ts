import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutVersionsInput } from './version-groups-create-without-versions.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutVersionsInput } from './version-groups-create-or-connect-without-versions.input';
import { VersionGroupsUpsertWithoutVersionsInput } from './version-groups-upsert-without-versions.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutVersionsInput } from './version-groups-update-to-one-with-where-without-versions.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput {

    @Field(() => VersionGroupsCreateWithoutVersionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutVersionsInput)
    create?: VersionGroupsCreateWithoutVersionsInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutVersionsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutVersionsInput;

    @Field(() => VersionGroupsUpsertWithoutVersionsInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutVersionsInput)
    upsert?: VersionGroupsUpsertWithoutVersionsInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutVersionsInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutVersionsInput)
    update?: VersionGroupsUpdateToOneWithWhereWithoutVersionsInput;
}

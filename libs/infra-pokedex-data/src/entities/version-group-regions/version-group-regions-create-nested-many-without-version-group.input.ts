import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupRegionsCreateWithoutVersionGroupInput } from './version-group-regions-create-without-version-group.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput } from './version-group-regions-create-or-connect-without-version-group.input';
import type { Identity } from 'identity-type';
import { VersionGroupRegionsCreateManyVersionGroupInputEnvelope } from './version-group-regions-create-many-version-group-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';

@InputType()
export class VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [VersionGroupRegionsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupRegionsCreateWithoutVersionGroupInput)
    create?: Array<VersionGroupRegionsCreateWithoutVersionGroupInput>;

    @Field(() => [VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => VersionGroupRegionsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => VersionGroupRegionsCreateManyVersionGroupInputEnvelope)
    createMany?: Identity<VersionGroupRegionsCreateManyVersionGroupInputEnvelope>;

    @Field(() => [VersionGroupRegionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>>;
}

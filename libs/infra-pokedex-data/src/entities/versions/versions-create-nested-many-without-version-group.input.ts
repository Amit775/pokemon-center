import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateWithoutVersionGroupInput } from './versions-create-without-version-group.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutVersionGroupInput } from './versions-create-or-connect-without-version-group.input';
import type { Identity } from 'identity-type';
import { VersionsCreateManyVersionGroupInputEnvelope } from './versions-create-many-version-group-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class VersionsCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [VersionsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionsCreateWithoutVersionGroupInput)
    create?: Array<VersionsCreateWithoutVersionGroupInput>;

    @Field(() => [VersionsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<VersionsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => VersionsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => VersionsCreateManyVersionGroupInputEnvelope)
    createMany?: Identity<VersionsCreateManyVersionGroupInputEnvelope>;

    @Field(() => [VersionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>>;
}

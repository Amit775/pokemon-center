import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateWithoutVersionGroupInput } from './versions-create-without-version-group.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutVersionGroupInput } from './versions-create-or-connect-without-version-group.input';
import { VersionsCreateManyVersionGroupInputEnvelope } from './versions-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class VersionsUncheckedCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [VersionsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionsCreateWithoutVersionGroupInput)
    create?: Array<VersionsCreateWithoutVersionGroupInput>;

    @Field(() => [VersionsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<VersionsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => VersionsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => VersionsCreateManyVersionGroupInputEnvelope)
    createMany?: VersionsCreateManyVersionGroupInputEnvelope;

    @Field(() => [VersionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>>;
}

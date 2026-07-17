import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateWithoutVersionGroupInput } from './versions-create-without-version-group.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutVersionGroupInput } from './versions-create-or-connect-without-version-group.input';
import { VersionsUpsertWithWhereUniqueWithoutVersionGroupInput } from './versions-upsert-with-where-unique-without-version-group.input';
import { VersionsCreateManyVersionGroupInputEnvelope } from './versions-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { VersionsUpdateWithWhereUniqueWithoutVersionGroupInput } from './versions-update-with-where-unique-without-version-group.input';
import { VersionsUpdateManyWithWhereWithoutVersionGroupInput } from './versions-update-many-with-where-without-version-group.input';
import { VersionsScalarWhereInput } from './versions-scalar-where.input';

@InputType()
export class VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput {

    @Field(() => [VersionsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionsCreateWithoutVersionGroupInput)
    create?: Array<VersionsCreateWithoutVersionGroupInput>;

    @Field(() => [VersionsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<VersionsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => [VersionsUpsertWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionsUpsertWithWhereUniqueWithoutVersionGroupInput)
    upsert?: Array<VersionsUpsertWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => VersionsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => VersionsCreateManyVersionGroupInputEnvelope)
    createMany?: VersionsCreateManyVersionGroupInputEnvelope;

    @Field(() => [VersionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>>;

    @Field(() => [VersionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>>;

    @Field(() => [VersionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>>;

    @Field(() => [VersionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>>;

    @Field(() => [VersionsUpdateWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionsUpdateWithWhereUniqueWithoutVersionGroupInput)
    update?: Array<VersionsUpdateWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => [VersionsUpdateManyWithWhereWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionsUpdateManyWithWhereWithoutVersionGroupInput)
    updateMany?: Array<VersionsUpdateManyWithWhereWithoutVersionGroupInput>;

    @Field(() => [VersionsScalarWhereInput], {nullable:true})
    @Type(() => VersionsScalarWhereInput)
    deleteMany?: Array<VersionsScalarWhereInput>;
}

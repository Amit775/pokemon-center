import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupRegionsCreateWithoutVersionGroupInput } from './version-group-regions-create-without-version-group.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput } from './version-group-regions-create-or-connect-without-version-group.input';
import { VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput } from './version-group-regions-upsert-with-where-unique-without-version-group.input';
import { VersionGroupRegionsCreateManyVersionGroupInputEnvelope } from './version-group-regions-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput } from './version-group-regions-update-with-where-unique-without-version-group.input';
import { VersionGroupRegionsUpdateManyWithWhereWithoutVersionGroupInput } from './version-group-regions-update-many-with-where-without-version-group.input';
import { VersionGroupRegionsScalarWhereInput } from './version-group-regions-scalar-where.input';

@InputType()
export class VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput {

    @Field(() => [VersionGroupRegionsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupRegionsCreateWithoutVersionGroupInput)
    create?: Array<VersionGroupRegionsCreateWithoutVersionGroupInput>;

    @Field(() => [VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => [VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput)
    upsert?: Array<VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => VersionGroupRegionsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => VersionGroupRegionsCreateManyVersionGroupInputEnvelope)
    createMany?: VersionGroupRegionsCreateManyVersionGroupInputEnvelope;

    @Field(() => [VersionGroupRegionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>>;

    @Field(() => [VersionGroupRegionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>>;

    @Field(() => [VersionGroupRegionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>>;

    @Field(() => [VersionGroupRegionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>>;

    @Field(() => [VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput)
    update?: Array<VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => [VersionGroupRegionsUpdateManyWithWhereWithoutVersionGroupInput], {nullable:true})
    @Type(() => VersionGroupRegionsUpdateManyWithWhereWithoutVersionGroupInput)
    updateMany?: Array<VersionGroupRegionsUpdateManyWithWhereWithoutVersionGroupInput>;

    @Field(() => [VersionGroupRegionsScalarWhereInput], {nullable:true})
    @Type(() => VersionGroupRegionsScalarWhereInput)
    deleteMany?: Array<VersionGroupRegionsScalarWhereInput>;
}

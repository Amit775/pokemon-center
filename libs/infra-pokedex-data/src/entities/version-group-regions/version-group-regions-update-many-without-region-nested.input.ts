import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupRegionsCreateWithoutRegionInput } from './version-group-regions-create-without-region.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsCreateOrConnectWithoutRegionInput } from './version-group-regions-create-or-connect-without-region.input';
import { VersionGroupRegionsUpsertWithWhereUniqueWithoutRegionInput } from './version-group-regions-upsert-with-where-unique-without-region.input';
import { VersionGroupRegionsCreateManyRegionInputEnvelope } from './version-group-regions-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput } from './version-group-regions-update-with-where-unique-without-region.input';
import { VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput } from './version-group-regions-update-many-with-where-without-region.input';
import { VersionGroupRegionsScalarWhereInput } from './version-group-regions-scalar-where.input';

@InputType()
export class VersionGroupRegionsUpdateManyWithoutRegionNestedInput {

    @Field(() => [VersionGroupRegionsCreateWithoutRegionInput], {nullable:true})
    @Type(() => VersionGroupRegionsCreateWithoutRegionInput)
    create?: Array<VersionGroupRegionsCreateWithoutRegionInput>;

    @Field(() => [VersionGroupRegionsCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => VersionGroupRegionsCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<VersionGroupRegionsCreateOrConnectWithoutRegionInput>;

    @Field(() => [VersionGroupRegionsUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => VersionGroupRegionsUpsertWithWhereUniqueWithoutRegionInput)
    upsert?: Array<VersionGroupRegionsUpsertWithWhereUniqueWithoutRegionInput>;

    @Field(() => VersionGroupRegionsCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => VersionGroupRegionsCreateManyRegionInputEnvelope)
    createMany?: VersionGroupRegionsCreateManyRegionInputEnvelope;

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

    @Field(() => [VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput)
    update?: Array<VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput>;

    @Field(() => [VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    @Type(() => VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput)
    updateMany?: Array<VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput>;

    @Field(() => [VersionGroupRegionsScalarWhereInput], {nullable:true})
    @Type(() => VersionGroupRegionsScalarWhereInput)
    deleteMany?: Array<VersionGroupRegionsScalarWhereInput>;
}

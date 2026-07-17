import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupRegionsCreateWithoutRegionInput } from './version-group-regions-create-without-region.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsCreateOrConnectWithoutRegionInput } from './version-group-regions-create-or-connect-without-region.input';
import { VersionGroupRegionsCreateManyRegionInputEnvelope } from './version-group-regions-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';

@InputType()
export class VersionGroupRegionsCreateNestedManyWithoutRegionInput {

    @Field(() => [VersionGroupRegionsCreateWithoutRegionInput], {nullable:true})
    @Type(() => VersionGroupRegionsCreateWithoutRegionInput)
    create?: Array<VersionGroupRegionsCreateWithoutRegionInput>;

    @Field(() => [VersionGroupRegionsCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => VersionGroupRegionsCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<VersionGroupRegionsCreateOrConnectWithoutRegionInput>;

    @Field(() => VersionGroupRegionsCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => VersionGroupRegionsCreateManyRegionInputEnvelope)
    createMany?: VersionGroupRegionsCreateManyRegionInputEnvelope;

    @Field(() => [VersionGroupRegionsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsCreateWithoutRegionInput } from './version-group-regions-create-without-region.input';

@InputType()
export class VersionGroupRegionsCreateOrConnectWithoutRegionInput {

    @Field(() => VersionGroupRegionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupRegionsCreateWithoutRegionInput, {nullable:false})
    @Type(() => VersionGroupRegionsCreateWithoutRegionInput)
    create!: VersionGroupRegionsCreateWithoutRegionInput;
}

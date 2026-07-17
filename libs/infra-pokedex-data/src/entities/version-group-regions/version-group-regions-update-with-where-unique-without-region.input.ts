import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsUpdateWithoutRegionInput } from './version-group-regions-update-without-region.input';

@InputType()
export class VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput {

    @Field(() => VersionGroupRegionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupRegionsUpdateWithoutRegionInput, {nullable:false})
    @Type(() => VersionGroupRegionsUpdateWithoutRegionInput)
    data!: VersionGroupRegionsUpdateWithoutRegionInput;
}

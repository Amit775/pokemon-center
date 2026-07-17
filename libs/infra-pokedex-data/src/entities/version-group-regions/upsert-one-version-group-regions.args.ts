import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsCreateInput } from './version-group-regions-create.input';
import { VersionGroupRegionsUpdateInput } from './version-group-regions-update.input';

@ArgsType()
export class UpsertOneVersionGroupRegionsArgs {

    @Field(() => VersionGroupRegionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupRegionsCreateInput, {nullable:false})
    @Type(() => VersionGroupRegionsCreateInput)
    create!: VersionGroupRegionsCreateInput;

    @Field(() => VersionGroupRegionsUpdateInput, {nullable:false})
    @Type(() => VersionGroupRegionsUpdateInput)
    update!: VersionGroupRegionsUpdateInput;
}

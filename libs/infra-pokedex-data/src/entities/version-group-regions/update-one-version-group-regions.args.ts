import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupRegionsUpdateInput } from './version-group-regions-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';

@ArgsType()
export class UpdateOneVersionGroupRegionsArgs {

    @Field(() => VersionGroupRegionsUpdateInput, {nullable:false})
    @Type(() => VersionGroupRegionsUpdateInput)
    data!: Identity<VersionGroupRegionsUpdateInput>;

    @Field(() => VersionGroupRegionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>;
}

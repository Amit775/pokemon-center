import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateInput } from './version-groups-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@ArgsType()
export class UpdateOneVersionGroupsArgs {

    @Field(() => VersionGroupsUpdateInput, {nullable:false})
    @Type(() => VersionGroupsUpdateInput)
    data!: Identity<VersionGroupsUpdateInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}

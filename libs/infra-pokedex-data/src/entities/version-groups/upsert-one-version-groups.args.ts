import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateInput } from './version-groups-create.input';
import { VersionGroupsUpdateInput } from './version-groups-update.input';

@ArgsType()
export class UpsertOneVersionGroupsArgs {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateInput, {nullable:false})
    @Type(() => VersionGroupsCreateInput)
    create!: Identity<VersionGroupsCreateInput>;

    @Field(() => VersionGroupsUpdateInput, {nullable:false})
    @Type(() => VersionGroupsUpdateInput)
    update!: Identity<VersionGroupsUpdateInput>;
}

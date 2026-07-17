import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateInput } from './version-groups-create.input';
import { VersionGroupsUpdateInput } from './version-groups-update.input';

@ArgsType()
export class UpsertOneVersionGroupsArgs {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateInput, {nullable:false})
    @Type(() => VersionGroupsCreateInput)
    create!: VersionGroupsCreateInput;

    @Field(() => VersionGroupsUpdateInput, {nullable:false})
    @Type(() => VersionGroupsUpdateInput)
    update!: VersionGroupsUpdateInput;
}

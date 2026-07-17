import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupsUpdateInput } from './version-groups-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@ArgsType()
export class UpdateOneVersionGroupsArgs {

    @Field(() => VersionGroupsUpdateInput, {nullable:false})
    @Type(() => VersionGroupsUpdateInput)
    data!: VersionGroupsUpdateInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}

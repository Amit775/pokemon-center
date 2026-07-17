import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EggGroupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EggGroupsCreateInput } from './egg-groups-create.input';
import { EggGroupsUpdateInput } from './egg-groups-update.input';

@ArgsType()
export class UpsertOneEggGroupsArgs {

    @Field(() => EggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => EggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<EggGroupsWhereUniqueInput, 'id'>;

    @Field(() => EggGroupsCreateInput, {nullable:false})
    @Type(() => EggGroupsCreateInput)
    create!: Identity<EggGroupsCreateInput>;

    @Field(() => EggGroupsUpdateInput, {nullable:false})
    @Type(() => EggGroupsUpdateInput)
    update!: Identity<EggGroupsUpdateInput>;
}

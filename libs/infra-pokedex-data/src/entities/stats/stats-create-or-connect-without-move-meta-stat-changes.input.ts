import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StatsCreateWithoutMoveMetaStatChangesInput } from './stats-create-without-move-meta-stat-changes.input';

@InputType()
export class StatsCreateOrConnectWithoutMoveMetaStatChangesInput {

    @Field(() => StatsWhereUniqueInput, {nullable:false})
    @Type(() => StatsWhereUniqueInput)
    where!: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsCreateWithoutMoveMetaStatChangesInput, {nullable:false})
    @Type(() => StatsCreateWithoutMoveMetaStatChangesInput)
    create!: Identity<StatsCreateWithoutMoveMetaStatChangesInput>;
}

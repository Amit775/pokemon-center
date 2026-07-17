import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsCreateWithoutMoveMetaStatChangesInput } from './stats-create-without-move-meta-stat-changes.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutMoveMetaStatChangesInput } from './stats-create-or-connect-without-move-meta-stat-changes.input';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class StatsCreateNestedOneWithoutMoveMetaStatChangesInput {

    @Field(() => StatsCreateWithoutMoveMetaStatChangesInput, {nullable:true})
    @Type(() => StatsCreateWithoutMoveMetaStatChangesInput)
    create?: StatsCreateWithoutMoveMetaStatChangesInput;

    @Field(() => StatsCreateOrConnectWithoutMoveMetaStatChangesInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutMoveMetaStatChangesInput)
    connectOrCreate?: StatsCreateOrConnectWithoutMoveMetaStatChangesInput;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;
}

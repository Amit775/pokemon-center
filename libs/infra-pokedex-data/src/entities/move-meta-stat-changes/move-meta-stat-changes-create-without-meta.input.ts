import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateNestedOneWithoutMoveMetaStatChangesInput } from '../stats/stats-create-nested-one-without-move-meta-stat-changes.input';

@InputType()
export class MoveMetaStatChangesCreateWithoutMetaInput {

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => StatsCreateNestedOneWithoutMoveMetaStatChangesInput, {nullable:false})
    stat!: Identity<StatsCreateNestedOneWithoutMoveMetaStatChangesInput>;
}

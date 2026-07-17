import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StatsCreateNestedOneWithoutMoveMetaStatChangesInput } from '../stats/stats-create-nested-one-without-move-meta-stat-changes.input';
import { MoveMetaCreateNestedOneWithoutStatChangesInput } from '../move-meta/move-meta-create-nested-one-without-stat-changes.input';

@InputType()
export class MoveMetaStatChangesCreateInput {

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => StatsCreateNestedOneWithoutMoveMetaStatChangesInput, {nullable:false})
    stat!: StatsCreateNestedOneWithoutMoveMetaStatChangesInput;

    @Field(() => MoveMetaCreateNestedOneWithoutStatChangesInput, {nullable:false})
    meta!: MoveMetaCreateNestedOneWithoutStatChangesInput;
}

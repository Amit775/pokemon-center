import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StatsCreateNestedOneWithoutMoveMetaStatChangesInput } from '../stats/stats-create-nested-one-without-move-meta-stat-changes.input';

@InputType()
export class MoveMetaStatChangesCreateWithoutMetaInput {

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => StatsCreateNestedOneWithoutMoveMetaStatChangesInput, {nullable:false})
    stat!: StatsCreateNestedOneWithoutMoveMetaStatChangesInput;
}

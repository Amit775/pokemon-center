import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput } from '../stats/stats-update-one-required-without-move-meta-stat-changes-nested.input';
import { MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput } from '../move-meta/move-meta-update-one-required-without-stat-changes-nested.input';

@InputType()
export class MoveMetaStatChangesUpdateInput {

    @Field(() => Int, {nullable:true})
    change?: number;

    @Field(() => StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput, {nullable:true})
    stat?: Identity<StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput>;

    @Field(() => MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput, {nullable:true})
    meta?: Identity<MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput>;
}

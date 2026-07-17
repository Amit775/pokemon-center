import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput } from '../stats/stats-update-one-required-without-move-meta-stat-changes-nested.input';
import { MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput } from '../move-meta/move-meta-update-one-required-without-stat-changes-nested.input';

@InputType()
export class MoveMetaStatChangesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    change?: IntFieldUpdateOperationsInput;

    @Field(() => StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput, {nullable:true})
    stat?: StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput;

    @Field(() => MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput, {nullable:true})
    meta?: MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput;
}

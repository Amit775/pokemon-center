import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput } from '../stats/stats-update-one-required-without-move-meta-stat-changes-nested.input';

@InputType()
export class MoveMetaStatChangesUpdateWithoutMetaInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    change?: IntFieldUpdateOperationsInput;

    @Field(() => StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput, {nullable:true})
    stat?: StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput;
}

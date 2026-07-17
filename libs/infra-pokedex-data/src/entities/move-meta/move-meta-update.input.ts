import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MovesUpdateOneRequiredWithoutMetaNestedInput } from '../moves/moves-update-one-required-without-meta-nested.input';
import { MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput } from '../move-meta-categories/move-meta-categories-update-one-required-without-meta-nested.input';
import { MoveMetaAilmentsUpdateOneWithoutMetaNestedInput } from '../move-meta-ailments/move-meta-ailments-update-one-without-meta-nested.input';
import { MoveMetaStatChangesUpdateManyWithoutMetaNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-update-many-without-meta-nested.input';

@InputType()
export class MoveMetaUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    min_hits?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    max_hits?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    min_turns?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    max_turns?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    drain?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    healing?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    crit_rate?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ailment_chance?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flinch_chance?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stat_chance?: IntFieldUpdateOperationsInput;

    @Field(() => MovesUpdateOneRequiredWithoutMetaNestedInput, {nullable:true})
    move?: MovesUpdateOneRequiredWithoutMetaNestedInput;

    @Field(() => MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput, {nullable:true})
    metaCategory?: MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput;

    @Field(() => MoveMetaAilmentsUpdateOneWithoutMetaNestedInput, {nullable:true})
    metaAilment?: MoveMetaAilmentsUpdateOneWithoutMetaNestedInput;

    @Field(() => MoveMetaStatChangesUpdateManyWithoutMetaNestedInput, {nullable:true})
    statChanges?: MoveMetaStatChangesUpdateManyWithoutMetaNestedInput;
}

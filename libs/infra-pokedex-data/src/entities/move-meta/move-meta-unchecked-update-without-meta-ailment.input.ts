import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { MoveMetaStatChangesUncheckedUpdateManyWithoutMetaNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-unchecked-update-many-without-meta-nested.input';

@InputType()
export class MoveMetaUncheckedUpdateWithoutMetaAilmentInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    move_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    meta_category_id?: IntFieldUpdateOperationsInput;

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

    @Field(() => MoveMetaStatChangesUncheckedUpdateManyWithoutMetaNestedInput, {nullable:true})
    statChanges?: MoveMetaStatChangesUncheckedUpdateManyWithoutMetaNestedInput;
}

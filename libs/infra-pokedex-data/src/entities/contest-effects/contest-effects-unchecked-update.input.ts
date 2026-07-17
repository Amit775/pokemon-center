import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MovesUncheckedUpdateManyWithoutContestEffectNestedInput } from '../moves/moves-unchecked-update-many-without-contest-effect-nested.input';

@InputType()
export class ContestEffectsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    appeal?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    jam?: IntFieldUpdateOperationsInput;

    @Field(() => MovesUncheckedUpdateManyWithoutContestEffectNestedInput, {nullable:true})
    moves?: MovesUncheckedUpdateManyWithoutContestEffectNestedInput;
}

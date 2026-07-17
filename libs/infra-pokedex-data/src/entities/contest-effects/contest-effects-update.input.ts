import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MovesUpdateManyWithoutContestEffectNestedInput } from '../moves/moves-update-many-without-contest-effect-nested.input';

@InputType()
export class ContestEffectsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    appeal?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    jam?: IntFieldUpdateOperationsInput;

    @Field(() => MovesUpdateManyWithoutContestEffectNestedInput, {nullable:true})
    moves?: MovesUpdateManyWithoutContestEffectNestedInput;
}

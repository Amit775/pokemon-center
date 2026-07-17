import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MovesUncheckedUpdateManyWithoutSuperContestEffectNestedInput } from '../moves/moves-unchecked-update-many-without-super-contest-effect-nested.input';

@InputType()
export class SuperContestEffectsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    appeal?: IntFieldUpdateOperationsInput;

    @Field(() => MovesUncheckedUpdateManyWithoutSuperContestEffectNestedInput, {nullable:true})
    moves?: MovesUncheckedUpdateManyWithoutSuperContestEffectNestedInput;
}

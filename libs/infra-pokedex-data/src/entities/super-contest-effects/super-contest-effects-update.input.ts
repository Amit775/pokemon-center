import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MovesUpdateManyWithoutSuperContestEffectNestedInput } from '../moves/moves-update-many-without-super-contest-effect-nested.input';

@InputType()
export class SuperContestEffectsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    appeal?: IntFieldUpdateOperationsInput;

    @Field(() => MovesUpdateManyWithoutSuperContestEffectNestedInput, {nullable:true})
    moves?: MovesUpdateManyWithoutSuperContestEffectNestedInput;
}

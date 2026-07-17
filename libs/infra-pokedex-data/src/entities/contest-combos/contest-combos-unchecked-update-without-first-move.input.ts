import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class ContestCombosUncheckedUpdateWithoutFirstMoveInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    second_move_id?: IntFieldUpdateOperationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class SuperContestCombosUncheckedUpdateManyWithoutSecondMoveInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    first_move_id?: IntFieldUpdateOperationsInput;
}

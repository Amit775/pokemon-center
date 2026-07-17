import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class MoveFlagMapUncheckedUpdateManyWithoutMoveInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    move_flag_id?: IntFieldUpdateOperationsInput;
}

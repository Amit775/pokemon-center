import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class MachinesUncheckedUpdateWithoutVersionGroupInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    machine_number?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    item_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    move_id?: IntFieldUpdateOperationsInput;
}

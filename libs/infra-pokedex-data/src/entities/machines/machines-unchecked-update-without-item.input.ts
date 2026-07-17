import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class MachinesUncheckedUpdateWithoutItemInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    machine_number?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version_group_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    move_id?: IntFieldUpdateOperationsInput;
}

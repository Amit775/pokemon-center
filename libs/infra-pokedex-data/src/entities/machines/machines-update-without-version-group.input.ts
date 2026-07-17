import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ItemsUpdateOneRequiredWithoutMachinesNestedInput } from '../items/items-update-one-required-without-machines-nested.input';
import { MovesUpdateOneRequiredWithoutMachinesNestedInput } from '../moves/moves-update-one-required-without-machines-nested.input';

@InputType()
export class MachinesUpdateWithoutVersionGroupInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    machine_number?: IntFieldUpdateOperationsInput;

    @Field(() => ItemsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    item?: ItemsUpdateOneRequiredWithoutMachinesNestedInput;

    @Field(() => MovesUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    move?: MovesUpdateOneRequiredWithoutMachinesNestedInput;
}

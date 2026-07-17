import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput } from '../version-groups/version-groups-update-one-required-without-machines-nested.input';
import { ItemsUpdateOneRequiredWithoutMachinesNestedInput } from '../items/items-update-one-required-without-machines-nested.input';

@InputType()
export class MachinesUpdateWithoutMoveInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    machine_number?: IntFieldUpdateOperationsInput;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput;

    @Field(() => ItemsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    item?: ItemsUpdateOneRequiredWithoutMachinesNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput } from '../version-groups/version-groups-update-one-required-without-machines-nested.input';
import { MovesUpdateOneRequiredWithoutMachinesNestedInput } from '../moves/moves-update-one-required-without-machines-nested.input';

@InputType()
export class MachinesUpdateWithoutItemInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    machine_number?: IntFieldUpdateOperationsInput;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput;

    @Field(() => MovesUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    move?: MovesUpdateOneRequiredWithoutMachinesNestedInput;
}

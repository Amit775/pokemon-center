import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput } from '../version-groups/version-groups-update-one-required-without-encounter-slots-nested.input';
import { EncountersUpdateManyWithoutEncounterSlotNestedInput } from '../encounters/encounters-update-many-without-encounter-slot-nested.input';

@InputType()
export class EncounterSlotsUpdateWithoutEncounterMethodInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    slot?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rarity?: IntFieldUpdateOperationsInput;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput;

    @Field(() => EncountersUpdateManyWithoutEncounterSlotNestedInput, {nullable:true})
    encounters?: EncountersUpdateManyWithoutEncounterSlotNestedInput;
}

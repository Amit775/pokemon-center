import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput } from '../version-groups/version-groups-update-one-required-without-encounter-slots-nested.input';
import { EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-slots-nested.input';

@InputType()
export class EncounterSlotsUpdateWithoutEncountersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    slot?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rarity?: IntFieldUpdateOperationsInput;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput;

    @Field(() => EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput, {nullable:true})
    encounterMethod?: EncounterMethodsUpdateOneRequiredWithoutSlotsNestedInput;
}

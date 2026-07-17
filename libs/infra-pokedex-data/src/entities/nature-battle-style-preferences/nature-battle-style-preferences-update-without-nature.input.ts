import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput } from '../move-battle-styles/move-battle-styles-update-one-required-without-nature-preferences-nested.input';

@InputType()
export class NatureBattleStylePreferencesUpdateWithoutNatureInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    low_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    high_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput, {nullable:true})
    battleStyle?: MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput;
}

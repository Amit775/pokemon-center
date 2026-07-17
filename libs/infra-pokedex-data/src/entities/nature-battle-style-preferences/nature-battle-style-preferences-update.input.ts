import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput } from '../natures/natures-update-one-required-without-battle-style-preferences-nested.input';
import { MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput } from '../move-battle-styles/move-battle-styles-update-one-required-without-nature-preferences-nested.input';

@InputType()
export class NatureBattleStylePreferencesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    low_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    high_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput, {nullable:true})
    nature?: NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput;

    @Field(() => MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput, {nullable:true})
    battleStyle?: MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput;
}

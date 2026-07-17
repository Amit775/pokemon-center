import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput } from '../natures/natures-update-one-required-without-battle-style-preferences-nested.input';

@InputType()
export class NatureBattleStylePreferencesUpdateWithoutBattleStyleInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    low_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    high_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput, {nullable:true})
    nature?: NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput;
}

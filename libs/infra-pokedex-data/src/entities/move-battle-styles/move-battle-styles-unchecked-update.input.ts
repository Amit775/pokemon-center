import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NatureBattleStylePreferencesUncheckedUpdateManyWithoutBattleStyleNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-update-many-without-battle-style-nested.input';

@InputType()
export class MoveBattleStylesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => NatureBattleStylePreferencesUncheckedUpdateManyWithoutBattleStyleNestedInput, {nullable:true})
    naturePreferences?: NatureBattleStylePreferencesUncheckedUpdateManyWithoutBattleStyleNestedInput;
}

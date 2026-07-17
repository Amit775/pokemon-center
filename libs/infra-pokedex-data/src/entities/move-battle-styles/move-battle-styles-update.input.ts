import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-update-many-without-battle-style-nested.input';

@InputType()
export class MoveBattleStylesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput, {nullable:true})
    naturePreferences?: NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput;
}

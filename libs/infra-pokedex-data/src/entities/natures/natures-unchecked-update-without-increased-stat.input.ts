import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NatureBattleStylePreferencesUncheckedUpdateManyWithoutNatureNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-update-many-without-nature-nested.input';

@InputType()
export class NaturesUncheckedUpdateWithoutIncreasedStatInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    decreased_stat_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    hates_flavor_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likes_flavor_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => NatureBattleStylePreferencesUncheckedUpdateManyWithoutNatureNestedInput, {nullable:true})
    battleStylePreferences?: NatureBattleStylePreferencesUncheckedUpdateManyWithoutNatureNestedInput;
}

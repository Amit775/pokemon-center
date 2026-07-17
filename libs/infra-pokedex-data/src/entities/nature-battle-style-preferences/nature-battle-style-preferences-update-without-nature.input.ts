import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput } from '../move-battle-styles/move-battle-styles-update-one-required-without-nature-preferences-nested.input';

@InputType()
export class NatureBattleStylePreferencesUpdateWithoutNatureInput {

    @Field(() => Int, {nullable:true})
    low_hp_preference?: number;

    @Field(() => Int, {nullable:true})
    high_hp_preference?: number;

    @Field(() => MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput, {nullable:true})
    battleStyle?: Identity<MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput>;
}

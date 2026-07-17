import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NaturesCreateNestedOneWithoutBattleStylePreferencesInput } from '../natures/natures-create-nested-one-without-battle-style-preferences.input';
import { MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput } from '../move-battle-styles/move-battle-styles-create-nested-one-without-nature-preferences.input';

@InputType()
export class NatureBattleStylePreferencesCreateInput {

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => NaturesCreateNestedOneWithoutBattleStylePreferencesInput, {nullable:false})
    nature!: NaturesCreateNestedOneWithoutBattleStylePreferencesInput;

    @Field(() => MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput, {nullable:false})
    battleStyle!: MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput } from '../move-battle-styles/move-battle-styles-create-nested-one-without-nature-preferences.input';

@InputType()
export class NatureBattleStylePreferencesCreateWithoutNatureInput {

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput, {nullable:false})
    battleStyle!: Identity<MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput>;
}

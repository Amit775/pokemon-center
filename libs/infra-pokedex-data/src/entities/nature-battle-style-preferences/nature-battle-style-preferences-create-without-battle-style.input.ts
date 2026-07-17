import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesCreateNestedOneWithoutBattleStylePreferencesInput } from '../natures/natures-create-nested-one-without-battle-style-preferences.input';

@InputType()
export class NatureBattleStylePreferencesCreateWithoutBattleStyleInput {

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => NaturesCreateNestedOneWithoutBattleStylePreferencesInput, {nullable:false})
    nature!: Identity<NaturesCreateNestedOneWithoutBattleStylePreferencesInput>;
}

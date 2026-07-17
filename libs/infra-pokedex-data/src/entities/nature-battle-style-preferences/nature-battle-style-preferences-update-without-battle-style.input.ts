import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput } from '../natures/natures-update-one-required-without-battle-style-preferences-nested.input';

@InputType()
export class NatureBattleStylePreferencesUpdateWithoutBattleStyleInput {

    @Field(() => Int, {nullable:true})
    low_hp_preference?: number;

    @Field(() => Int, {nullable:true})
    high_hp_preference?: number;

    @Field(() => NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput, {nullable:true})
    nature?: Identity<NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesUncheckedUpdateManyWithoutBattleStyleNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-update-many-without-battle-style-nested.input';

@InputType()
export class MoveBattleStylesUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => NatureBattleStylePreferencesUncheckedUpdateManyWithoutBattleStyleNestedInput, {nullable:true})
    naturePreferences?: Identity<NatureBattleStylePreferencesUncheckedUpdateManyWithoutBattleStyleNestedInput>;
}

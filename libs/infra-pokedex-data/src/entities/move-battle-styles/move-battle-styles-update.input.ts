import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-update-many-without-battle-style-nested.input';

@InputType()
export class MoveBattleStylesUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput, {nullable:true})
    naturePreferences?: Identity<NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput>;
}

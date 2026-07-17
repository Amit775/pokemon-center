import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-create-nested-many-without-battle-style.input';

@InputType()
export class MoveBattleStylesCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput, {nullable:true})
    naturePreferences?: Identity<NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput>;
}

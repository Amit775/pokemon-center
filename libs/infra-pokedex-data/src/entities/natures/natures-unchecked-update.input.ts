import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesUncheckedUpdateManyWithoutNatureNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-update-many-without-nature-nested.input';

@InputType()
export class NaturesUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    decreased_stat_id?: number;

    @Field(() => Int, {nullable:true})
    increased_stat_id?: number;

    @Field(() => Int, {nullable:true})
    hates_flavor_id?: number;

    @Field(() => Int, {nullable:true})
    likes_flavor_id?: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => NatureBattleStylePreferencesUncheckedUpdateManyWithoutNatureNestedInput, {nullable:true})
    battleStylePreferences?: Identity<NatureBattleStylePreferencesUncheckedUpdateManyWithoutNatureNestedInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesUncheckedCreateNestedManyWithoutNatureInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-create-nested-many-without-nature.input';

@InputType()
export class NaturesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    decreased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    increased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    hates_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    likes_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => NatureBattleStylePreferencesUncheckedCreateNestedManyWithoutNatureInput, {nullable:true})
    battleStylePreferences?: Identity<NatureBattleStylePreferencesUncheckedCreateNestedManyWithoutNatureInput>;
}

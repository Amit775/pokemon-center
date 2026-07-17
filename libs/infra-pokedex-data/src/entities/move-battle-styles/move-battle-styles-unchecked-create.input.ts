import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NatureBattleStylePreferencesUncheckedCreateNestedManyWithoutBattleStyleInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-create-nested-many-without-battle-style.input';

@InputType()
export class MoveBattleStylesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => NatureBattleStylePreferencesUncheckedCreateNestedManyWithoutBattleStyleInput, {nullable:true})
    naturePreferences?: NatureBattleStylePreferencesUncheckedCreateNestedManyWithoutBattleStyleInput;
}

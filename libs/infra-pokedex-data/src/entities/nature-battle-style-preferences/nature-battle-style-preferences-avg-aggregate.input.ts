import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NatureBattleStylePreferencesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    nature_id?: true;

    @Field(() => Boolean, {nullable:true})
    move_battle_style_id?: true;

    @Field(() => Boolean, {nullable:true})
    low_hp_preference?: true;

    @Field(() => Boolean, {nullable:true})
    high_hp_preference?: true;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StatsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    damage_class_id?: true;

    @Field(() => Boolean, {nullable:true})
    is_battle_only?: true;

    @Field(() => Boolean, {nullable:true})
    game_index?: true;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class StatsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    damage_class_id?: number;

    @Field(() => Float, {nullable:true})
    is_battle_only?: number;

    @Field(() => Float, {nullable:true})
    game_index?: number;
}

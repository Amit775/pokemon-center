import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NaturesAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    decreased_stat_id?: number;

    @Field(() => Float, {nullable:true})
    increased_stat_id?: number;

    @Field(() => Float, {nullable:true})
    hates_flavor_id?: number;

    @Field(() => Float, {nullable:true})
    likes_flavor_id?: number;

    @Field(() => Float, {nullable:true})
    game_index?: number;
}

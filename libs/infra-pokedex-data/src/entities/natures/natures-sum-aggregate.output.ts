import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NaturesSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

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
}

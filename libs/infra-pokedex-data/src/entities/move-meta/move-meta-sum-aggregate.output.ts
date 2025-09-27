import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveMetaSumAggregate {

    @Field(() => Int, {nullable:true})
    move_id?: number;

    @Field(() => Int, {nullable:true})
    meta_category_id?: number;

    @Field(() => Int, {nullable:true})
    meta_ailment_id?: number;

    @Field(() => Int, {nullable:true})
    min_hits?: number;

    @Field(() => Int, {nullable:true})
    max_hits?: number;

    @Field(() => Int, {nullable:true})
    min_turns?: number;

    @Field(() => Int, {nullable:true})
    max_turns?: number;

    @Field(() => Int, {nullable:true})
    drain?: number;

    @Field(() => Int, {nullable:true})
    healing?: number;

    @Field(() => Int, {nullable:true})
    crit_rate?: number;

    @Field(() => Int, {nullable:true})
    ailment_chance?: number;

    @Field(() => Int, {nullable:true})
    flinch_chance?: number;

    @Field(() => Int, {nullable:true})
    stat_chance?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MoveMetaAvgAggregate {

    @Field(() => Float, {nullable:true})
    move_id?: number;

    @Field(() => Float, {nullable:true})
    meta_category_id?: number;

    @Field(() => Float, {nullable:true})
    meta_ailment_id?: number;

    @Field(() => Float, {nullable:true})
    min_hits?: number;

    @Field(() => Float, {nullable:true})
    max_hits?: number;

    @Field(() => Float, {nullable:true})
    min_turns?: number;

    @Field(() => Float, {nullable:true})
    max_turns?: number;

    @Field(() => Float, {nullable:true})
    drain?: number;

    @Field(() => Float, {nullable:true})
    healing?: number;

    @Field(() => Float, {nullable:true})
    crit_rate?: number;

    @Field(() => Float, {nullable:true})
    ailment_chance?: number;

    @Field(() => Float, {nullable:true})
    flinch_chance?: number;

    @Field(() => Float, {nullable:true})
    stat_chance?: number;
}

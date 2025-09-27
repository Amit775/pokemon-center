import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveMetaCountAggregate {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    meta_category_id!: number;

    @Field(() => Int, {nullable:false})
    meta_ailment_id!: number;

    @Field(() => Int, {nullable:false})
    min_hits!: number;

    @Field(() => Int, {nullable:false})
    max_hits!: number;

    @Field(() => Int, {nullable:false})
    min_turns!: number;

    @Field(() => Int, {nullable:false})
    max_turns!: number;

    @Field(() => Int, {nullable:false})
    drain!: number;

    @Field(() => Int, {nullable:false})
    healing!: number;

    @Field(() => Int, {nullable:false})
    crit_rate!: number;

    @Field(() => Int, {nullable:false})
    ailment_chance!: number;

    @Field(() => Int, {nullable:false})
    flinch_chance!: number;

    @Field(() => Int, {nullable:false})
    stat_chance!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

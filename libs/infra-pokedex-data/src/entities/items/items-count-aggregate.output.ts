import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    identifier!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Int, {nullable:false})
    cost!: number;

    @Field(() => Int, {nullable:false})
    fling_power!: number;

    @Field(() => Int, {nullable:false})
    fling_effect_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BerriesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    firmness_id!: number;

    @Field(() => Int, {nullable:false})
    natural_gift_power!: number;

    @Field(() => Int, {nullable:false})
    natural_gift_type_id!: number;

    @Field(() => Int, {nullable:false})
    size!: number;

    @Field(() => Int, {nullable:false})
    max_harvest!: number;

    @Field(() => Int, {nullable:false})
    growth_time!: number;

    @Field(() => Int, {nullable:false})
    soil_dryness!: number;

    @Field(() => Int, {nullable:false})
    smoothness!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

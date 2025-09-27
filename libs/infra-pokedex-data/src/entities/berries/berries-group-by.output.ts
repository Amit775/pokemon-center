import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BerriesCountAggregate } from './berries-count-aggregate.output';
import { BerriesAvgAggregate } from './berries-avg-aggregate.output';
import { BerriesSumAggregate } from './berries-sum-aggregate.output';
import { BerriesMinAggregate } from './berries-min-aggregate.output';
import { BerriesMaxAggregate } from './berries-max-aggregate.output';

@ObjectType()
export class BerriesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    firmness_id!: number;

    @Field(() => Int, {nullable:true})
    natural_gift_power?: number;

    @Field(() => Int, {nullable:true})
    natural_gift_type_id?: number;

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

    @Field(() => BerriesCountAggregate, {nullable:true})
    _count?: BerriesCountAggregate;

    @Field(() => BerriesAvgAggregate, {nullable:true})
    _avg?: BerriesAvgAggregate;

    @Field(() => BerriesSumAggregate, {nullable:true})
    _sum?: BerriesSumAggregate;

    @Field(() => BerriesMinAggregate, {nullable:true})
    _min?: BerriesMinAggregate;

    @Field(() => BerriesMaxAggregate, {nullable:true})
    _max?: BerriesMaxAggregate;
}

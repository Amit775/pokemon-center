import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ItemFlagsCountAggregate } from './item-flags-count-aggregate.output';
import { ItemFlagsAvgAggregate } from './item-flags-avg-aggregate.output';
import { ItemFlagsSumAggregate } from './item-flags-sum-aggregate.output';
import { ItemFlagsMinAggregate } from './item-flags-min-aggregate.output';
import { ItemFlagsMaxAggregate } from './item-flags-max-aggregate.output';

@ObjectType()
export class AggregateItemFlags {

    @Field(() => ItemFlagsCountAggregate, {nullable:true})
    _count?: ItemFlagsCountAggregate;

    @Field(() => ItemFlagsAvgAggregate, {nullable:true})
    _avg?: ItemFlagsAvgAggregate;

    @Field(() => ItemFlagsSumAggregate, {nullable:true})
    _sum?: ItemFlagsSumAggregate;

    @Field(() => ItemFlagsMinAggregate, {nullable:true})
    _min?: ItemFlagsMinAggregate;

    @Field(() => ItemFlagsMaxAggregate, {nullable:true})
    _max?: ItemFlagsMaxAggregate;
}

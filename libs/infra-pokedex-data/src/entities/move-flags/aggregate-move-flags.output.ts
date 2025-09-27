import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MoveFlagsCountAggregate } from './move-flags-count-aggregate.output';
import { MoveFlagsAvgAggregate } from './move-flags-avg-aggregate.output';
import { MoveFlagsSumAggregate } from './move-flags-sum-aggregate.output';
import { MoveFlagsMinAggregate } from './move-flags-min-aggregate.output';
import { MoveFlagsMaxAggregate } from './move-flags-max-aggregate.output';

@ObjectType()
export class AggregateMoveFlags {

    @Field(() => MoveFlagsCountAggregate, {nullable:true})
    _count?: MoveFlagsCountAggregate;

    @Field(() => MoveFlagsAvgAggregate, {nullable:true})
    _avg?: MoveFlagsAvgAggregate;

    @Field(() => MoveFlagsSumAggregate, {nullable:true})
    _sum?: MoveFlagsSumAggregate;

    @Field(() => MoveFlagsMinAggregate, {nullable:true})
    _min?: MoveFlagsMinAggregate;

    @Field(() => MoveFlagsMaxAggregate, {nullable:true})
    _max?: MoveFlagsMaxAggregate;
}

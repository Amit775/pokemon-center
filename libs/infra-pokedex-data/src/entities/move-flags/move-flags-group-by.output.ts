import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagsCountAggregate } from './move-flags-count-aggregate.output';
import { MoveFlagsAvgAggregate } from './move-flags-avg-aggregate.output';
import { MoveFlagsSumAggregate } from './move-flags-sum-aggregate.output';
import { MoveFlagsMinAggregate } from './move-flags-min-aggregate.output';
import { MoveFlagsMaxAggregate } from './move-flags-max-aggregate.output';

@ObjectType()
export class MoveFlagsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MoveFlagsCountAggregate, {nullable:true})
    _count?: Identity<MoveFlagsCountAggregate>;

    @Field(() => MoveFlagsAvgAggregate, {nullable:true})
    _avg?: Identity<MoveFlagsAvgAggregate>;

    @Field(() => MoveFlagsSumAggregate, {nullable:true})
    _sum?: Identity<MoveFlagsSumAggregate>;

    @Field(() => MoveFlagsMinAggregate, {nullable:true})
    _min?: Identity<MoveFlagsMinAggregate>;

    @Field(() => MoveFlagsMaxAggregate, {nullable:true})
    _max?: Identity<MoveFlagsMaxAggregate>;
}

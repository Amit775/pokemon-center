import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesCountAggregate } from './contest-types-count-aggregate.output';
import { ContestTypesAvgAggregate } from './contest-types-avg-aggregate.output';
import { ContestTypesSumAggregate } from './contest-types-sum-aggregate.output';
import { ContestTypesMinAggregate } from './contest-types-min-aggregate.output';
import { ContestTypesMaxAggregate } from './contest-types-max-aggregate.output';

@ObjectType()
export class AggregateContestTypes {

    @Field(() => ContestTypesCountAggregate, {nullable:true})
    _count?: Identity<ContestTypesCountAggregate>;

    @Field(() => ContestTypesAvgAggregate, {nullable:true})
    _avg?: Identity<ContestTypesAvgAggregate>;

    @Field(() => ContestTypesSumAggregate, {nullable:true})
    _sum?: Identity<ContestTypesSumAggregate>;

    @Field(() => ContestTypesMinAggregate, {nullable:true})
    _min?: Identity<ContestTypesMinAggregate>;

    @Field(() => ContestTypesMaxAggregate, {nullable:true})
    _max?: Identity<ContestTypesMaxAggregate>;
}

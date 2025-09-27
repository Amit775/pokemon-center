import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContestTypesCountAggregate } from './contest-types-count-aggregate.output';
import { ContestTypesAvgAggregate } from './contest-types-avg-aggregate.output';
import { ContestTypesSumAggregate } from './contest-types-sum-aggregate.output';
import { ContestTypesMinAggregate } from './contest-types-min-aggregate.output';
import { ContestTypesMaxAggregate } from './contest-types-max-aggregate.output';

@ObjectType()
export class AggregateContestTypes {

    @Field(() => ContestTypesCountAggregate, {nullable:true})
    _count?: ContestTypesCountAggregate;

    @Field(() => ContestTypesAvgAggregate, {nullable:true})
    _avg?: ContestTypesAvgAggregate;

    @Field(() => ContestTypesSumAggregate, {nullable:true})
    _sum?: ContestTypesSumAggregate;

    @Field(() => ContestTypesMinAggregate, {nullable:true})
    _min?: ContestTypesMinAggregate;

    @Field(() => ContestTypesMaxAggregate, {nullable:true})
    _max?: ContestTypesMaxAggregate;
}

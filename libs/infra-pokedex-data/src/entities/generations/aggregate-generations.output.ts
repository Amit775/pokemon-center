import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenerationsCountAggregate } from './generations-count-aggregate.output';
import { GenerationsAvgAggregate } from './generations-avg-aggregate.output';
import { GenerationsSumAggregate } from './generations-sum-aggregate.output';
import { GenerationsMinAggregate } from './generations-min-aggregate.output';
import { GenerationsMaxAggregate } from './generations-max-aggregate.output';

@ObjectType()
export class AggregateGenerations {

    @Field(() => GenerationsCountAggregate, {nullable:true})
    _count?: GenerationsCountAggregate;

    @Field(() => GenerationsAvgAggregate, {nullable:true})
    _avg?: GenerationsAvgAggregate;

    @Field(() => GenerationsSumAggregate, {nullable:true})
    _sum?: GenerationsSumAggregate;

    @Field(() => GenerationsMinAggregate, {nullable:true})
    _min?: GenerationsMinAggregate;

    @Field(() => GenerationsMaxAggregate, {nullable:true})
    _max?: GenerationsMaxAggregate;
}

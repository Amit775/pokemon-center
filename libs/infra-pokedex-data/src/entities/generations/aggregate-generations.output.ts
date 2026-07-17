import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCountAggregate } from './generations-count-aggregate.output';
import { GenerationsAvgAggregate } from './generations-avg-aggregate.output';
import { GenerationsSumAggregate } from './generations-sum-aggregate.output';
import { GenerationsMinAggregate } from './generations-min-aggregate.output';
import { GenerationsMaxAggregate } from './generations-max-aggregate.output';

@ObjectType()
export class AggregateGenerations {

    @Field(() => GenerationsCountAggregate, {nullable:true})
    _count?: Identity<GenerationsCountAggregate>;

    @Field(() => GenerationsAvgAggregate, {nullable:true})
    _avg?: Identity<GenerationsAvgAggregate>;

    @Field(() => GenerationsSumAggregate, {nullable:true})
    _sum?: Identity<GenerationsSumAggregate>;

    @Field(() => GenerationsMinAggregate, {nullable:true})
    _min?: Identity<GenerationsMinAggregate>;

    @Field(() => GenerationsMaxAggregate, {nullable:true})
    _max?: Identity<GenerationsMaxAggregate>;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContestCombosCountAggregate } from './contest-combos-count-aggregate.output';
import { ContestCombosAvgAggregate } from './contest-combos-avg-aggregate.output';
import { ContestCombosSumAggregate } from './contest-combos-sum-aggregate.output';
import { ContestCombosMinAggregate } from './contest-combos-min-aggregate.output';
import { ContestCombosMaxAggregate } from './contest-combos-max-aggregate.output';

@ObjectType()
export class AggregateContestCombos {

    @Field(() => ContestCombosCountAggregate, {nullable:true})
    _count?: ContestCombosCountAggregate;

    @Field(() => ContestCombosAvgAggregate, {nullable:true})
    _avg?: ContestCombosAvgAggregate;

    @Field(() => ContestCombosSumAggregate, {nullable:true})
    _sum?: ContestCombosSumAggregate;

    @Field(() => ContestCombosMinAggregate, {nullable:true})
    _min?: ContestCombosMinAggregate;

    @Field(() => ContestCombosMaxAggregate, {nullable:true})
    _max?: ContestCombosMaxAggregate;
}

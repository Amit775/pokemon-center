import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContestEffectsCountAggregate } from './contest-effects-count-aggregate.output';
import { ContestEffectsAvgAggregate } from './contest-effects-avg-aggregate.output';
import { ContestEffectsSumAggregate } from './contest-effects-sum-aggregate.output';
import { ContestEffectsMinAggregate } from './contest-effects-min-aggregate.output';
import { ContestEffectsMaxAggregate } from './contest-effects-max-aggregate.output';

@ObjectType()
export class AggregateContestEffects {

    @Field(() => ContestEffectsCountAggregate, {nullable:true})
    _count?: ContestEffectsCountAggregate;

    @Field(() => ContestEffectsAvgAggregate, {nullable:true})
    _avg?: ContestEffectsAvgAggregate;

    @Field(() => ContestEffectsSumAggregate, {nullable:true})
    _sum?: ContestEffectsSumAggregate;

    @Field(() => ContestEffectsMinAggregate, {nullable:true})
    _min?: ContestEffectsMinAggregate;

    @Field(() => ContestEffectsMaxAggregate, {nullable:true})
    _max?: ContestEffectsMaxAggregate;
}

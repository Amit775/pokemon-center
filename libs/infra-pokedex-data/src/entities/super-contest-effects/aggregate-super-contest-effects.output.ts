import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestEffectsCountAggregate } from './super-contest-effects-count-aggregate.output';
import { SuperContestEffectsAvgAggregate } from './super-contest-effects-avg-aggregate.output';
import { SuperContestEffectsSumAggregate } from './super-contest-effects-sum-aggregate.output';
import { SuperContestEffectsMinAggregate } from './super-contest-effects-min-aggregate.output';
import { SuperContestEffectsMaxAggregate } from './super-contest-effects-max-aggregate.output';

@ObjectType()
export class AggregateSuperContestEffects {

    @Field(() => SuperContestEffectsCountAggregate, {nullable:true})
    _count?: Identity<SuperContestEffectsCountAggregate>;

    @Field(() => SuperContestEffectsAvgAggregate, {nullable:true})
    _avg?: Identity<SuperContestEffectsAvgAggregate>;

    @Field(() => SuperContestEffectsSumAggregate, {nullable:true})
    _sum?: Identity<SuperContestEffectsSumAggregate>;

    @Field(() => SuperContestEffectsMinAggregate, {nullable:true})
    _min?: Identity<SuperContestEffectsMinAggregate>;

    @Field(() => SuperContestEffectsMaxAggregate, {nullable:true})
    _max?: Identity<SuperContestEffectsMaxAggregate>;
}

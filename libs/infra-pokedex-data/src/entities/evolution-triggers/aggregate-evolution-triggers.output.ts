import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionTriggersCountAggregate } from './evolution-triggers-count-aggregate.output';
import { EvolutionTriggersAvgAggregate } from './evolution-triggers-avg-aggregate.output';
import { EvolutionTriggersSumAggregate } from './evolution-triggers-sum-aggregate.output';
import { EvolutionTriggersMinAggregate } from './evolution-triggers-min-aggregate.output';
import { EvolutionTriggersMaxAggregate } from './evolution-triggers-max-aggregate.output';

@ObjectType()
export class AggregateEvolutionTriggers {

    @Field(() => EvolutionTriggersCountAggregate, {nullable:true})
    _count?: Identity<EvolutionTriggersCountAggregate>;

    @Field(() => EvolutionTriggersAvgAggregate, {nullable:true})
    _avg?: Identity<EvolutionTriggersAvgAggregate>;

    @Field(() => EvolutionTriggersSumAggregate, {nullable:true})
    _sum?: Identity<EvolutionTriggersSumAggregate>;

    @Field(() => EvolutionTriggersMinAggregate, {nullable:true})
    _min?: Identity<EvolutionTriggersMinAggregate>;

    @Field(() => EvolutionTriggersMaxAggregate, {nullable:true})
    _max?: Identity<EvolutionTriggersMaxAggregate>;
}

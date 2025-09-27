import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EvolutionTriggersCountAggregate } from './evolution-triggers-count-aggregate.output';
import { EvolutionTriggersAvgAggregate } from './evolution-triggers-avg-aggregate.output';
import { EvolutionTriggersSumAggregate } from './evolution-triggers-sum-aggregate.output';
import { EvolutionTriggersMinAggregate } from './evolution-triggers-min-aggregate.output';
import { EvolutionTriggersMaxAggregate } from './evolution-triggers-max-aggregate.output';

@ObjectType()
export class EvolutionTriggersGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => EvolutionTriggersCountAggregate, {nullable:true})
    _count?: EvolutionTriggersCountAggregate;

    @Field(() => EvolutionTriggersAvgAggregate, {nullable:true})
    _avg?: EvolutionTriggersAvgAggregate;

    @Field(() => EvolutionTriggersSumAggregate, {nullable:true})
    _sum?: EvolutionTriggersSumAggregate;

    @Field(() => EvolutionTriggersMinAggregate, {nullable:true})
    _min?: EvolutionTriggersMinAggregate;

    @Field(() => EvolutionTriggersMaxAggregate, {nullable:true})
    _max?: EvolutionTriggersMaxAggregate;
}

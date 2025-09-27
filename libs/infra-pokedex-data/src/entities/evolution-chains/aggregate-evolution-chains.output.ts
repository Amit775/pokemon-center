import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EvolutionChainsCountAggregate } from './evolution-chains-count-aggregate.output';
import { EvolutionChainsAvgAggregate } from './evolution-chains-avg-aggregate.output';
import { EvolutionChainsSumAggregate } from './evolution-chains-sum-aggregate.output';
import { EvolutionChainsMinAggregate } from './evolution-chains-min-aggregate.output';
import { EvolutionChainsMaxAggregate } from './evolution-chains-max-aggregate.output';

@ObjectType()
export class AggregateEvolutionChains {

    @Field(() => EvolutionChainsCountAggregate, {nullable:true})
    _count?: EvolutionChainsCountAggregate;

    @Field(() => EvolutionChainsAvgAggregate, {nullable:true})
    _avg?: EvolutionChainsAvgAggregate;

    @Field(() => EvolutionChainsSumAggregate, {nullable:true})
    _sum?: EvolutionChainsSumAggregate;

    @Field(() => EvolutionChainsMinAggregate, {nullable:true})
    _min?: EvolutionChainsMinAggregate;

    @Field(() => EvolutionChainsMaxAggregate, {nullable:true})
    _max?: EvolutionChainsMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCountAggregate } from './pokemon-evolution-count-aggregate.output';
import { PokemonEvolutionAvgAggregate } from './pokemon-evolution-avg-aggregate.output';
import { PokemonEvolutionSumAggregate } from './pokemon-evolution-sum-aggregate.output';
import { PokemonEvolutionMinAggregate } from './pokemon-evolution-min-aggregate.output';
import { PokemonEvolutionMaxAggregate } from './pokemon-evolution-max-aggregate.output';

@ObjectType()
export class AggregatePokemonEvolution {

    @Field(() => PokemonEvolutionCountAggregate, {nullable:true})
    _count?: Identity<PokemonEvolutionCountAggregate>;

    @Field(() => PokemonEvolutionAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonEvolutionAvgAggregate>;

    @Field(() => PokemonEvolutionSumAggregate, {nullable:true})
    _sum?: Identity<PokemonEvolutionSumAggregate>;

    @Field(() => PokemonEvolutionMinAggregate, {nullable:true})
    _min?: Identity<PokemonEvolutionMinAggregate>;

    @Field(() => PokemonEvolutionMaxAggregate, {nullable:true})
    _max?: Identity<PokemonEvolutionMaxAggregate>;
}

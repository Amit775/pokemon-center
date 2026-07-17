import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCountAggregate } from './pokemon-count-aggregate.output';
import { PokemonAvgAggregate } from './pokemon-avg-aggregate.output';
import { PokemonSumAggregate } from './pokemon-sum-aggregate.output';
import { PokemonMinAggregate } from './pokemon-min-aggregate.output';
import { PokemonMaxAggregate } from './pokemon-max-aggregate.output';

@ObjectType()
export class AggregatePokemon {

    @Field(() => PokemonCountAggregate, {nullable:true})
    _count?: Identity<PokemonCountAggregate>;

    @Field(() => PokemonAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonAvgAggregate>;

    @Field(() => PokemonSumAggregate, {nullable:true})
    _sum?: Identity<PokemonSumAggregate>;

    @Field(() => PokemonMinAggregate, {nullable:true})
    _min?: Identity<PokemonMinAggregate>;

    @Field(() => PokemonMaxAggregate, {nullable:true})
    _max?: Identity<PokemonMaxAggregate>;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PokemonCountAggregate } from './pokemon-count-aggregate.output';
import { PokemonAvgAggregate } from './pokemon-avg-aggregate.output';
import { PokemonSumAggregate } from './pokemon-sum-aggregate.output';
import { PokemonMinAggregate } from './pokemon-min-aggregate.output';
import { PokemonMaxAggregate } from './pokemon-max-aggregate.output';

@ObjectType()
export class AggregatePokemon {

    @Field(() => PokemonCountAggregate, {nullable:true})
    _count?: PokemonCountAggregate;

    @Field(() => PokemonAvgAggregate, {nullable:true})
    _avg?: PokemonAvgAggregate;

    @Field(() => PokemonSumAggregate, {nullable:true})
    _sum?: PokemonSumAggregate;

    @Field(() => PokemonMinAggregate, {nullable:true})
    _min?: PokemonMinAggregate;

    @Field(() => PokemonMaxAggregate, {nullable:true})
    _max?: PokemonMaxAggregate;
}

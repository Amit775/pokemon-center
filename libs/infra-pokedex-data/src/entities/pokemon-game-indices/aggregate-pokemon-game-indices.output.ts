import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PokemonGameIndicesCountAggregate } from './pokemon-game-indices-count-aggregate.output';
import { PokemonGameIndicesAvgAggregate } from './pokemon-game-indices-avg-aggregate.output';
import { PokemonGameIndicesSumAggregate } from './pokemon-game-indices-sum-aggregate.output';
import { PokemonGameIndicesMinAggregate } from './pokemon-game-indices-min-aggregate.output';
import { PokemonGameIndicesMaxAggregate } from './pokemon-game-indices-max-aggregate.output';

@ObjectType()
export class AggregatePokemonGameIndices {

    @Field(() => PokemonGameIndicesCountAggregate, {nullable:true})
    _count?: PokemonGameIndicesCountAggregate;

    @Field(() => PokemonGameIndicesAvgAggregate, {nullable:true})
    _avg?: PokemonGameIndicesAvgAggregate;

    @Field(() => PokemonGameIndicesSumAggregate, {nullable:true})
    _sum?: PokemonGameIndicesSumAggregate;

    @Field(() => PokemonGameIndicesMinAggregate, {nullable:true})
    _min?: PokemonGameIndicesMinAggregate;

    @Field(() => PokemonGameIndicesMaxAggregate, {nullable:true})
    _max?: PokemonGameIndicesMaxAggregate;
}

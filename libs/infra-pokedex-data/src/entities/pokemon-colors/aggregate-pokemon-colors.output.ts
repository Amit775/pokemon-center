import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonColorsCountAggregate } from './pokemon-colors-count-aggregate.output';
import { PokemonColorsAvgAggregate } from './pokemon-colors-avg-aggregate.output';
import { PokemonColorsSumAggregate } from './pokemon-colors-sum-aggregate.output';
import { PokemonColorsMinAggregate } from './pokemon-colors-min-aggregate.output';
import { PokemonColorsMaxAggregate } from './pokemon-colors-max-aggregate.output';

@ObjectType()
export class AggregatePokemonColors {

    @Field(() => PokemonColorsCountAggregate, {nullable:true})
    _count?: Identity<PokemonColorsCountAggregate>;

    @Field(() => PokemonColorsAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonColorsAvgAggregate>;

    @Field(() => PokemonColorsSumAggregate, {nullable:true})
    _sum?: Identity<PokemonColorsSumAggregate>;

    @Field(() => PokemonColorsMinAggregate, {nullable:true})
    _min?: Identity<PokemonColorsMinAggregate>;

    @Field(() => PokemonColorsMaxAggregate, {nullable:true})
    _max?: Identity<PokemonColorsMaxAggregate>;
}

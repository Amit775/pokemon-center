import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonColorsCountAggregate } from './pokemon-colors-count-aggregate.output';
import { PokemonColorsAvgAggregate } from './pokemon-colors-avg-aggregate.output';
import { PokemonColorsSumAggregate } from './pokemon-colors-sum-aggregate.output';
import { PokemonColorsMinAggregate } from './pokemon-colors-min-aggregate.output';
import { PokemonColorsMaxAggregate } from './pokemon-colors-max-aggregate.output';

@ObjectType()
export class PokemonColorsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonColorsCountAggregate, {nullable:true})
    _count?: PokemonColorsCountAggregate;

    @Field(() => PokemonColorsAvgAggregate, {nullable:true})
    _avg?: PokemonColorsAvgAggregate;

    @Field(() => PokemonColorsSumAggregate, {nullable:true})
    _sum?: PokemonColorsSumAggregate;

    @Field(() => PokemonColorsMinAggregate, {nullable:true})
    _min?: PokemonColorsMinAggregate;

    @Field(() => PokemonColorsMaxAggregate, {nullable:true})
    _max?: PokemonColorsMaxAggregate;
}

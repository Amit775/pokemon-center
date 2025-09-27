import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonDexNumbersCountAggregate } from './pokemon-dex-numbers-count-aggregate.output';
import { PokemonDexNumbersAvgAggregate } from './pokemon-dex-numbers-avg-aggregate.output';
import { PokemonDexNumbersSumAggregate } from './pokemon-dex-numbers-sum-aggregate.output';
import { PokemonDexNumbersMinAggregate } from './pokemon-dex-numbers-min-aggregate.output';
import { PokemonDexNumbersMaxAggregate } from './pokemon-dex-numbers-max-aggregate.output';

@ObjectType()
export class PokemonDexNumbersGroupBy {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => PokemonDexNumbersCountAggregate, {nullable:true})
    _count?: PokemonDexNumbersCountAggregate;

    @Field(() => PokemonDexNumbersAvgAggregate, {nullable:true})
    _avg?: PokemonDexNumbersAvgAggregate;

    @Field(() => PokemonDexNumbersSumAggregate, {nullable:true})
    _sum?: PokemonDexNumbersSumAggregate;

    @Field(() => PokemonDexNumbersMinAggregate, {nullable:true})
    _min?: PokemonDexNumbersMinAggregate;

    @Field(() => PokemonDexNumbersMaxAggregate, {nullable:true})
    _max?: PokemonDexNumbersMaxAggregate;
}

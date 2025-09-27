import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonTypesCountAggregate } from './pokemon-types-count-aggregate.output';
import { PokemonTypesAvgAggregate } from './pokemon-types-avg-aggregate.output';
import { PokemonTypesSumAggregate } from './pokemon-types-sum-aggregate.output';
import { PokemonTypesMinAggregate } from './pokemon-types-min-aggregate.output';
import { PokemonTypesMaxAggregate } from './pokemon-types-max-aggregate.output';

@ObjectType()
export class PokemonTypesGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => PokemonTypesCountAggregate, {nullable:true})
    _count?: PokemonTypesCountAggregate;

    @Field(() => PokemonTypesAvgAggregate, {nullable:true})
    _avg?: PokemonTypesAvgAggregate;

    @Field(() => PokemonTypesSumAggregate, {nullable:true})
    _sum?: PokemonTypesSumAggregate;

    @Field(() => PokemonTypesMinAggregate, {nullable:true})
    _min?: PokemonTypesMinAggregate;

    @Field(() => PokemonTypesMaxAggregate, {nullable:true})
    _max?: PokemonTypesMaxAggregate;
}

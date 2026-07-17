import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonTypesCountAggregate } from './pokemon-types-count-aggregate.output';
import { PokemonTypesAvgAggregate } from './pokemon-types-avg-aggregate.output';
import { PokemonTypesSumAggregate } from './pokemon-types-sum-aggregate.output';
import { PokemonTypesMinAggregate } from './pokemon-types-min-aggregate.output';
import { PokemonTypesMaxAggregate } from './pokemon-types-max-aggregate.output';

@ObjectType()
export class AggregatePokemonTypes {

    @Field(() => PokemonTypesCountAggregate, {nullable:true})
    _count?: Identity<PokemonTypesCountAggregate>;

    @Field(() => PokemonTypesAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonTypesAvgAggregate>;

    @Field(() => PokemonTypesSumAggregate, {nullable:true})
    _sum?: Identity<PokemonTypesSumAggregate>;

    @Field(() => PokemonTypesMinAggregate, {nullable:true})
    _min?: Identity<PokemonTypesMinAggregate>;

    @Field(() => PokemonTypesMaxAggregate, {nullable:true})
    _max?: Identity<PokemonTypesMaxAggregate>;
}

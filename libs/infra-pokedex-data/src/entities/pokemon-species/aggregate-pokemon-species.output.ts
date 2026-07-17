import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCountAggregate } from './pokemon-species-count-aggregate.output';
import { PokemonSpeciesAvgAggregate } from './pokemon-species-avg-aggregate.output';
import { PokemonSpeciesSumAggregate } from './pokemon-species-sum-aggregate.output';
import { PokemonSpeciesMinAggregate } from './pokemon-species-min-aggregate.output';
import { PokemonSpeciesMaxAggregate } from './pokemon-species-max-aggregate.output';

@ObjectType()
export class AggregatePokemonSpecies {

    @Field(() => PokemonSpeciesCountAggregate, {nullable:true})
    _count?: Identity<PokemonSpeciesCountAggregate>;

    @Field(() => PokemonSpeciesAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonSpeciesAvgAggregate>;

    @Field(() => PokemonSpeciesSumAggregate, {nullable:true})
    _sum?: Identity<PokemonSpeciesSumAggregate>;

    @Field(() => PokemonSpeciesMinAggregate, {nullable:true})
    _min?: Identity<PokemonSpeciesMinAggregate>;

    @Field(() => PokemonSpeciesMaxAggregate, {nullable:true})
    _max?: Identity<PokemonSpeciesMaxAggregate>;
}

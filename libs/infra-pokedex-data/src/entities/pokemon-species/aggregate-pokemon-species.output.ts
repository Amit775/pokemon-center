import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PokemonSpeciesCountAggregate } from './pokemon-species-count-aggregate.output';
import { PokemonSpeciesAvgAggregate } from './pokemon-species-avg-aggregate.output';
import { PokemonSpeciesSumAggregate } from './pokemon-species-sum-aggregate.output';
import { PokemonSpeciesMinAggregate } from './pokemon-species-min-aggregate.output';
import { PokemonSpeciesMaxAggregate } from './pokemon-species-max-aggregate.output';

@ObjectType()
export class AggregatePokemonSpecies {

    @Field(() => PokemonSpeciesCountAggregate, {nullable:true})
    _count?: PokemonSpeciesCountAggregate;

    @Field(() => PokemonSpeciesAvgAggregate, {nullable:true})
    _avg?: PokemonSpeciesAvgAggregate;

    @Field(() => PokemonSpeciesSumAggregate, {nullable:true})
    _sum?: PokemonSpeciesSumAggregate;

    @Field(() => PokemonSpeciesMinAggregate, {nullable:true})
    _min?: PokemonSpeciesMinAggregate;

    @Field(() => PokemonSpeciesMaxAggregate, {nullable:true})
    _max?: PokemonSpeciesMaxAggregate;
}

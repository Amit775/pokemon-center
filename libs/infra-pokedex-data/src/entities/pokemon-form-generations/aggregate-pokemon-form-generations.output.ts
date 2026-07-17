import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsCountAggregate } from './pokemon-form-generations-count-aggregate.output';
import { PokemonFormGenerationsAvgAggregate } from './pokemon-form-generations-avg-aggregate.output';
import { PokemonFormGenerationsSumAggregate } from './pokemon-form-generations-sum-aggregate.output';
import { PokemonFormGenerationsMinAggregate } from './pokemon-form-generations-min-aggregate.output';
import { PokemonFormGenerationsMaxAggregate } from './pokemon-form-generations-max-aggregate.output';

@ObjectType()
export class AggregatePokemonFormGenerations {

    @Field(() => PokemonFormGenerationsCountAggregate, {nullable:true})
    _count?: Identity<PokemonFormGenerationsCountAggregate>;

    @Field(() => PokemonFormGenerationsAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonFormGenerationsAvgAggregate>;

    @Field(() => PokemonFormGenerationsSumAggregate, {nullable:true})
    _sum?: Identity<PokemonFormGenerationsSumAggregate>;

    @Field(() => PokemonFormGenerationsMinAggregate, {nullable:true})
    _min?: Identity<PokemonFormGenerationsMinAggregate>;

    @Field(() => PokemonFormGenerationsMaxAggregate, {nullable:true})
    _max?: Identity<PokemonFormGenerationsMaxAggregate>;
}

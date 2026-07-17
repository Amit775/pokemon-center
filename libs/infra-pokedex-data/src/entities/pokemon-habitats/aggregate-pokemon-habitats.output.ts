import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsCountAggregate } from './pokemon-habitats-count-aggregate.output';
import { PokemonHabitatsAvgAggregate } from './pokemon-habitats-avg-aggregate.output';
import { PokemonHabitatsSumAggregate } from './pokemon-habitats-sum-aggregate.output';
import { PokemonHabitatsMinAggregate } from './pokemon-habitats-min-aggregate.output';
import { PokemonHabitatsMaxAggregate } from './pokemon-habitats-max-aggregate.output';

@ObjectType()
export class AggregatePokemonHabitats {

    @Field(() => PokemonHabitatsCountAggregate, {nullable:true})
    _count?: Identity<PokemonHabitatsCountAggregate>;

    @Field(() => PokemonHabitatsAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonHabitatsAvgAggregate>;

    @Field(() => PokemonHabitatsSumAggregate, {nullable:true})
    _sum?: Identity<PokemonHabitatsSumAggregate>;

    @Field(() => PokemonHabitatsMinAggregate, {nullable:true})
    _min?: Identity<PokemonHabitatsMinAggregate>;

    @Field(() => PokemonHabitatsMaxAggregate, {nullable:true})
    _max?: Identity<PokemonHabitatsMaxAggregate>;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PokemonItemsCountAggregate } from './pokemon-items-count-aggregate.output';
import { PokemonItemsAvgAggregate } from './pokemon-items-avg-aggregate.output';
import { PokemonItemsSumAggregate } from './pokemon-items-sum-aggregate.output';
import { PokemonItemsMinAggregate } from './pokemon-items-min-aggregate.output';
import { PokemonItemsMaxAggregate } from './pokemon-items-max-aggregate.output';

@ObjectType()
export class AggregatePokemonItems {

    @Field(() => PokemonItemsCountAggregate, {nullable:true})
    _count?: PokemonItemsCountAggregate;

    @Field(() => PokemonItemsAvgAggregate, {nullable:true})
    _avg?: PokemonItemsAvgAggregate;

    @Field(() => PokemonItemsSumAggregate, {nullable:true})
    _sum?: PokemonItemsSumAggregate;

    @Field(() => PokemonItemsMinAggregate, {nullable:true})
    _min?: PokemonItemsMinAggregate;

    @Field(() => PokemonItemsMaxAggregate, {nullable:true})
    _max?: PokemonItemsMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PokemonEggGroupsCountAggregate } from './pokemon-egg-groups-count-aggregate.output';
import { PokemonEggGroupsAvgAggregate } from './pokemon-egg-groups-avg-aggregate.output';
import { PokemonEggGroupsSumAggregate } from './pokemon-egg-groups-sum-aggregate.output';
import { PokemonEggGroupsMinAggregate } from './pokemon-egg-groups-min-aggregate.output';
import { PokemonEggGroupsMaxAggregate } from './pokemon-egg-groups-max-aggregate.output';

@ObjectType()
export class AggregatePokemonEggGroups {

    @Field(() => PokemonEggGroupsCountAggregate, {nullable:true})
    _count?: PokemonEggGroupsCountAggregate;

    @Field(() => PokemonEggGroupsAvgAggregate, {nullable:true})
    _avg?: PokemonEggGroupsAvgAggregate;

    @Field(() => PokemonEggGroupsSumAggregate, {nullable:true})
    _sum?: PokemonEggGroupsSumAggregate;

    @Field(() => PokemonEggGroupsMinAggregate, {nullable:true})
    _min?: PokemonEggGroupsMinAggregate;

    @Field(() => PokemonEggGroupsMaxAggregate, {nullable:true})
    _max?: PokemonEggGroupsMaxAggregate;
}

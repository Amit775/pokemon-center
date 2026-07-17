import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsCountAggregate } from './pokemon-egg-groups-count-aggregate.output';
import { PokemonEggGroupsAvgAggregate } from './pokemon-egg-groups-avg-aggregate.output';
import { PokemonEggGroupsSumAggregate } from './pokemon-egg-groups-sum-aggregate.output';
import { PokemonEggGroupsMinAggregate } from './pokemon-egg-groups-min-aggregate.output';
import { PokemonEggGroupsMaxAggregate } from './pokemon-egg-groups-max-aggregate.output';

@ObjectType()
export class PokemonEggGroupsGroupBy {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    egg_group_id!: number;

    @Field(() => PokemonEggGroupsCountAggregate, {nullable:true})
    _count?: Identity<PokemonEggGroupsCountAggregate>;

    @Field(() => PokemonEggGroupsAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonEggGroupsAvgAggregate>;

    @Field(() => PokemonEggGroupsSumAggregate, {nullable:true})
    _sum?: Identity<PokemonEggGroupsSumAggregate>;

    @Field(() => PokemonEggGroupsMinAggregate, {nullable:true})
    _min?: Identity<PokemonEggGroupsMinAggregate>;

    @Field(() => PokemonEggGroupsMaxAggregate, {nullable:true})
    _max?: Identity<PokemonEggGroupsMaxAggregate>;
}

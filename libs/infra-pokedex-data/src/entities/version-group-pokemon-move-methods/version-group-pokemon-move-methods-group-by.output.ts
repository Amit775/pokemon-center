import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsCountAggregate } from './version-group-pokemon-move-methods-count-aggregate.output';
import { VersionGroupPokemonMoveMethodsAvgAggregate } from './version-group-pokemon-move-methods-avg-aggregate.output';
import { VersionGroupPokemonMoveMethodsSumAggregate } from './version-group-pokemon-move-methods-sum-aggregate.output';
import { VersionGroupPokemonMoveMethodsMinAggregate } from './version-group-pokemon-move-methods-min-aggregate.output';
import { VersionGroupPokemonMoveMethodsMaxAggregate } from './version-group-pokemon-move-methods-max-aggregate.output';

@ObjectType()
export class VersionGroupPokemonMoveMethodsGroupBy {

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_move_method_id!: number;

    @Field(() => VersionGroupPokemonMoveMethodsCountAggregate, {nullable:true})
    _count?: Identity<VersionGroupPokemonMoveMethodsCountAggregate>;

    @Field(() => VersionGroupPokemonMoveMethodsAvgAggregate, {nullable:true})
    _avg?: Identity<VersionGroupPokemonMoveMethodsAvgAggregate>;

    @Field(() => VersionGroupPokemonMoveMethodsSumAggregate, {nullable:true})
    _sum?: Identity<VersionGroupPokemonMoveMethodsSumAggregate>;

    @Field(() => VersionGroupPokemonMoveMethodsMinAggregate, {nullable:true})
    _min?: Identity<VersionGroupPokemonMoveMethodsMinAggregate>;

    @Field(() => VersionGroupPokemonMoveMethodsMaxAggregate, {nullable:true})
    _max?: Identity<VersionGroupPokemonMoveMethodsMaxAggregate>;
}

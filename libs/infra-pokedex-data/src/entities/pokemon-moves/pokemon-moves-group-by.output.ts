import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesCountAggregate } from './pokemon-moves-count-aggregate.output';
import { PokemonMovesAvgAggregate } from './pokemon-moves-avg-aggregate.output';
import { PokemonMovesSumAggregate } from './pokemon-moves-sum-aggregate.output';
import { PokemonMovesMinAggregate } from './pokemon-moves-min-aggregate.output';
import { PokemonMovesMaxAggregate } from './pokemon-moves-max-aggregate.output';

@ObjectType()
export class PokemonMovesGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_move_method_id!: number;

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    mastery?: number;

    @Field(() => PokemonMovesCountAggregate, {nullable:true})
    _count?: Identity<PokemonMovesCountAggregate>;

    @Field(() => PokemonMovesAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonMovesAvgAggregate>;

    @Field(() => PokemonMovesSumAggregate, {nullable:true})
    _sum?: Identity<PokemonMovesSumAggregate>;

    @Field(() => PokemonMovesMinAggregate, {nullable:true})
    _min?: Identity<PokemonMovesMinAggregate>;

    @Field(() => PokemonMovesMaxAggregate, {nullable:true})
    _max?: Identity<PokemonMovesMaxAggregate>;
}

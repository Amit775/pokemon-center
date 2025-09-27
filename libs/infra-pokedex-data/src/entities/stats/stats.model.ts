import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonStats } from '../pokemon-stats/pokemon-stats.model';
import { MoveMetaStatChanges } from '../move-meta-stat-changes/move-meta-stat-changes.model';
import { Characteristics } from '../characteristics/characteristics.model';
import { Natures } from '../natures/natures.model';
import { StatsCount } from './stats-count.output';

/**
 * @@TypeGraphQL.type(name: "Stat")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Stat")'})
export class Stats {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id!: number | null;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_battle_only!: number;

    @Field(() => Int, {nullable:true})
    game_index!: number | null;

    @Field(() => [PokemonStats], {nullable:true})
    pokemonStats?: Array<PokemonStats>;

    @Field(() => [MoveMetaStatChanges], {nullable:true})
    moveMetaStatChanges?: Array<MoveMetaStatChanges>;

    @Field(() => [Characteristics], {nullable:true})
    characteristics?: Array<Characteristics>;

    @Field(() => [Natures], {nullable:true})
    naturesDecreased?: Array<Natures>;

    @Field(() => [Natures], {nullable:true})
    naturesIncreased?: Array<Natures>;

    @Field(() => StatsCount, {nullable:false})
    _count?: StatsCount;
}

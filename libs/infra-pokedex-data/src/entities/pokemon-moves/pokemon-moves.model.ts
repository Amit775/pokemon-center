import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon } from '../pokemon/pokemon.model';
import { VersionGroups } from '../version-groups/version-groups.model';
import { Moves } from '../moves/moves.model';
import { PokemonMoveMethods } from '../pokemon-move-methods/pokemon-move-methods.model';

/**
 * @@TypeGraphQL.type(name: "PokemonMove")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonMove")'})
export class PokemonMoves {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_move_method_id!: number;

    @Field(() => Int, {nullable:true})
    level!: number | null;

    @Field(() => Int, {nullable:true})
    order!: number | null;

    @Field(() => Int, {nullable:true})
    mastery!: number | null;

    @Field(() => Pokemon, {nullable:false})
    pokemon?: Pokemon;

    @Field(() => VersionGroups, {nullable:false})
    versionGroup?: VersionGroups;

    @Field(() => Moves, {nullable:false})
    move?: Moves;

    @Field(() => PokemonMoveMethods, {nullable:false})
    moveMethod?: PokemonMoveMethods;
}

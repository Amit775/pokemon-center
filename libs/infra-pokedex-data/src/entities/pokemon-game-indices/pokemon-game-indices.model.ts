import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon } from '../pokemon/pokemon.model';
import { Versions } from '../versions/versions.model';

/**
 * @@TypeGraphQL.type(name: "PokemonGameIndex")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonGameIndex")'})
export class PokemonGameIndices {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => Pokemon, {nullable:false})
    pokemon?: Pokemon;

    @Field(() => Versions, {nullable:false})
    version?: Versions;
}

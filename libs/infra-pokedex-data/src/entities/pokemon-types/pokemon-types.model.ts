import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon } from '../pokemon/pokemon.model';
import { Types } from '../types/types.model';

/**
 * @@TypeGraphQL.type(name: "PokemonType")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonType")'})
export class PokemonTypes {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => Pokemon, {nullable:false})
    pokemon?: Pokemon;

    @Field(() => Types, {nullable:false})
    type?: Types;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import { Pokedexes } from '../pokedexes/pokedexes.model';

/**
 * @@TypeGraphQL.type(name: "PokemonDexNumber")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonDexNumber")'})
export class PokemonDexNumbers {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => PokemonSpecies, {nullable:false})
    species?: PokemonSpecies;

    @Field(() => Pokedexes, {nullable:false})
    pokedex?: Pokedexes;
}

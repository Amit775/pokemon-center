import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonForms } from '../pokemon-forms/pokemon-forms.model';
import { Generations } from '../generations/generations.model';

/**
 * @@TypeGraphQL.type(name: "PokemonFormGeneration")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonFormGeneration")'})
export class PokemonFormGenerations {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => PokemonForms, {nullable:false})
    pokemonForm?: PokemonForms;

    @Field(() => Generations, {nullable:false})
    generation?: Generations;
}

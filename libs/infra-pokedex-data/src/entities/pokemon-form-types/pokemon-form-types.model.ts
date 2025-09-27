import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonForms } from '../pokemon-forms/pokemon-forms.model';
import { Types } from '../types/types.model';

/**
 * @@TypeGraphQL.type(name: "PokemonFormType")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonFormType")'})
export class PokemonFormTypes {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => PokemonForms, {nullable:false})
    pokemonForm?: PokemonForms;

    @Field(() => Types, {nullable:false})
    type?: Types;
}

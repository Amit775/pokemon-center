import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsCreateNestedOneWithoutTypesInput } from '../pokemon-forms/pokemon-forms-create-nested-one-without-types.input';

@InputType()
export class PokemonFormTypesCreateWithoutTypeInput {

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => PokemonFormsCreateNestedOneWithoutTypesInput, {nullable:false})
    pokemonForm!: Identity<PokemonFormsCreateNestedOneWithoutTypesInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsCreateNestedOneWithoutTypesInput } from '../pokemon-forms/pokemon-forms-create-nested-one-without-types.input';
import { TypesCreateNestedOneWithoutFormTypesInput } from '../types/types-create-nested-one-without-form-types.input';

@InputType()
export class PokemonFormTypesCreateInput {

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => PokemonFormsCreateNestedOneWithoutTypesInput, {nullable:false})
    pokemonForm!: Identity<PokemonFormsCreateNestedOneWithoutTypesInput>;

    @Field(() => TypesCreateNestedOneWithoutFormTypesInput, {nullable:false})
    type!: Identity<TypesCreateNestedOneWithoutFormTypesInput>;
}

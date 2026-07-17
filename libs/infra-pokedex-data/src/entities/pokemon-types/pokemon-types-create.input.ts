import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonCreateNestedOneWithoutTypesInput } from '../pokemon/pokemon-create-nested-one-without-types.input';
import { TypesCreateNestedOneWithoutPokemonTypesInput } from '../types/types-create-nested-one-without-pokemon-types.input';

@InputType()
export class PokemonTypesCreateInput {

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => PokemonCreateNestedOneWithoutTypesInput, {nullable:false})
    pokemon!: PokemonCreateNestedOneWithoutTypesInput;

    @Field(() => TypesCreateNestedOneWithoutPokemonTypesInput, {nullable:false})
    type!: TypesCreateNestedOneWithoutPokemonTypesInput;
}

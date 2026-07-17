import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypesCreateNestedOneWithoutPokemonTypesInput } from '../types/types-create-nested-one-without-pokemon-types.input';

@InputType()
export class PokemonTypesCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => TypesCreateNestedOneWithoutPokemonTypesInput, {nullable:false})
    type!: TypesCreateNestedOneWithoutPokemonTypesInput;
}

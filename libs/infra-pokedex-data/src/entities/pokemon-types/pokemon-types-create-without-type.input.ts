import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonCreateNestedOneWithoutTypesInput } from '../pokemon/pokemon-create-nested-one-without-types.input';

@InputType()
export class PokemonTypesCreateWithoutTypeInput {

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => PokemonCreateNestedOneWithoutTypesInput, {nullable:false})
    pokemon!: PokemonCreateNestedOneWithoutTypesInput;
}

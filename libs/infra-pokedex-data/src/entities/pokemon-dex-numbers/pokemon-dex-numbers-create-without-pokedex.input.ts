import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesCreateNestedOneWithoutDexNumbersInput } from '../pokemon-species/pokemon-species-create-nested-one-without-dex-numbers.input';

@InputType()
export class PokemonDexNumbersCreateWithoutPokedexInput {

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => PokemonSpeciesCreateNestedOneWithoutDexNumbersInput, {nullable:false})
    species!: PokemonSpeciesCreateNestedOneWithoutDexNumbersInput;
}

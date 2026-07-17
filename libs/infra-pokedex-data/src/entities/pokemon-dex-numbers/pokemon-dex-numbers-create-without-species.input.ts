import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokedexesCreateNestedOneWithoutDexNumbersInput } from '../pokedexes/pokedexes-create-nested-one-without-dex-numbers.input';

@InputType()
export class PokemonDexNumbersCreateWithoutSpeciesInput {

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => PokedexesCreateNestedOneWithoutDexNumbersInput, {nullable:false})
    pokedex!: PokedexesCreateNestedOneWithoutDexNumbersInput;
}

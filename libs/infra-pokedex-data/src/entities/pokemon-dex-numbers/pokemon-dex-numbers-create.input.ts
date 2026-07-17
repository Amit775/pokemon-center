import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateNestedOneWithoutDexNumbersInput } from '../pokemon-species/pokemon-species-create-nested-one-without-dex-numbers.input';
import { PokedexesCreateNestedOneWithoutDexNumbersInput } from '../pokedexes/pokedexes-create-nested-one-without-dex-numbers.input';

@InputType()
export class PokemonDexNumbersCreateInput {

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => PokemonSpeciesCreateNestedOneWithoutDexNumbersInput, {nullable:false})
    species!: Identity<PokemonSpeciesCreateNestedOneWithoutDexNumbersInput>;

    @Field(() => PokedexesCreateNestedOneWithoutDexNumbersInput, {nullable:false})
    pokedex!: Identity<PokedexesCreateNestedOneWithoutDexNumbersInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesCreateNestedOneWithoutDexNumbersInput } from '../pokedexes/pokedexes-create-nested-one-without-dex-numbers.input';

@InputType()
export class PokemonDexNumbersCreateWithoutSpeciesInput {

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => PokedexesCreateNestedOneWithoutDexNumbersInput, {nullable:false})
    pokedex!: Identity<PokedexesCreateNestedOneWithoutDexNumbersInput>;
}

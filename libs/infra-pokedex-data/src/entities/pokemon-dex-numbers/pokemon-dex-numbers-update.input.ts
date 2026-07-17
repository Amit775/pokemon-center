import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-dex-numbers-nested.input';
import { PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput } from '../pokedexes/pokedexes-update-one-required-without-dex-numbers-nested.input';

@InputType()
export class PokemonDexNumbersUpdateInput {

    @Field(() => Int, {nullable:true})
    pokedex_number?: number;

    @Field(() => PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput>;

    @Field(() => PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput, {nullable:true})
    pokedex?: Identity<PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput>;
}

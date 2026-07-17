import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput } from '../pokemon-forms/pokemon-forms-update-one-required-without-generations-nested.input';
import { GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput } from '../generations/generations-update-one-required-without-pokemon-form-generations-nested.input';

@InputType()
export class PokemonFormGenerationsUpdateInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput, {nullable:true})
    pokemonForm?: Identity<PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput>;

    @Field(() => GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput>;
}

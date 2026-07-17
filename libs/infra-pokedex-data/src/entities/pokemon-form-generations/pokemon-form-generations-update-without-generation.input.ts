import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput } from '../pokemon-forms/pokemon-forms-update-one-required-without-generations-nested.input';

@InputType()
export class PokemonFormGenerationsUpdateWithoutGenerationInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput, {nullable:true})
    pokemonForm?: Identity<PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput>;
}

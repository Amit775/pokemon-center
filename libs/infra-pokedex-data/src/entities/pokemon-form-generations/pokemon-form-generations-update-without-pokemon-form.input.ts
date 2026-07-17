import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput } from '../generations/generations-update-one-required-without-pokemon-form-generations-nested.input';

@InputType()
export class PokemonFormGenerationsUpdateWithoutPokemonFormInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput>;
}

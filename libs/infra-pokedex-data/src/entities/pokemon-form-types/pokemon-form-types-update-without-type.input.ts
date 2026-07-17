import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsUpdateOneRequiredWithoutTypesNestedInput } from '../pokemon-forms/pokemon-forms-update-one-required-without-types-nested.input';

@InputType()
export class PokemonFormTypesUpdateWithoutTypeInput {

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => PokemonFormsUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    pokemonForm?: Identity<PokemonFormsUpdateOneRequiredWithoutTypesNestedInput>;
}

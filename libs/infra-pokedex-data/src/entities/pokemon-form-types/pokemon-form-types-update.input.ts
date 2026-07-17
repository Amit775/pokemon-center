import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsUpdateOneRequiredWithoutTypesNestedInput } from '../pokemon-forms/pokemon-forms-update-one-required-without-types-nested.input';
import { TypesUpdateOneRequiredWithoutFormTypesNestedInput } from '../types/types-update-one-required-without-form-types-nested.input';

@InputType()
export class PokemonFormTypesUpdateInput {

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => PokemonFormsUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    pokemonForm?: Identity<PokemonFormsUpdateOneRequiredWithoutTypesNestedInput>;

    @Field(() => TypesUpdateOneRequiredWithoutFormTypesNestedInput, {nullable:true})
    type?: Identity<TypesUpdateOneRequiredWithoutFormTypesNestedInput>;
}

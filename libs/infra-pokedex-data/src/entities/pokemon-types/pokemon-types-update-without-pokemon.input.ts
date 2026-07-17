import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateOneRequiredWithoutPokemonTypesNestedInput } from '../types/types-update-one-required-without-pokemon-types-nested.input';

@InputType()
export class PokemonTypesUpdateWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => TypesUpdateOneRequiredWithoutPokemonTypesNestedInput, {nullable:true})
    type?: Identity<TypesUpdateOneRequiredWithoutPokemonTypesNestedInput>;
}

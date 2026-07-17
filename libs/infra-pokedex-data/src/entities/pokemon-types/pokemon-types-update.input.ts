import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutTypesNestedInput } from '../pokemon/pokemon-update-one-required-without-types-nested.input';
import { TypesUpdateOneRequiredWithoutPokemonTypesNestedInput } from '../types/types-update-one-required-without-pokemon-types-nested.input';

@InputType()
export class PokemonTypesUpdateInput {

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => PokemonUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutTypesNestedInput>;

    @Field(() => TypesUpdateOneRequiredWithoutPokemonTypesNestedInput, {nullable:true})
    type?: Identity<TypesUpdateOneRequiredWithoutPokemonTypesNestedInput>;
}

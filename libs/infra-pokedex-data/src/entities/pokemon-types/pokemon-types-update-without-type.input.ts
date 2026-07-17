import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutTypesNestedInput } from '../pokemon/pokemon-update-one-required-without-types-nested.input';

@InputType()
export class PokemonTypesUpdateWithoutTypeInput {

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => PokemonUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutTypesNestedInput>;
}

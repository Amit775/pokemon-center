import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateOneRequiredWithoutFormTypesNestedInput } from '../types/types-update-one-required-without-form-types-nested.input';

@InputType()
export class PokemonFormTypesUpdateWithoutPokemonFormInput {

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => TypesUpdateOneRequiredWithoutFormTypesNestedInput, {nullable:true})
    type?: Identity<TypesUpdateOneRequiredWithoutFormTypesNestedInput>;
}

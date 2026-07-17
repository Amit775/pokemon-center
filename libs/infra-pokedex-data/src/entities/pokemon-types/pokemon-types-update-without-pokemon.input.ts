import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { TypesUpdateOneRequiredWithoutPokemonTypesNestedInput } from '../types/types-update-one-required-without-pokemon-types-nested.input';

@InputType()
export class PokemonTypesUpdateWithoutPokemonInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => TypesUpdateOneRequiredWithoutPokemonTypesNestedInput, {nullable:true})
    type?: TypesUpdateOneRequiredWithoutPokemonTypesNestedInput;
}

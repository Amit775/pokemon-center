import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonFormsUpdateOneRequiredWithoutTypesNestedInput } from '../pokemon-forms/pokemon-forms-update-one-required-without-types-nested.input';

@InputType()
export class PokemonFormTypesUpdateWithoutTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonFormsUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    pokemonForm?: PokemonFormsUpdateOneRequiredWithoutTypesNestedInput;
}

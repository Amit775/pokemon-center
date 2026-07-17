import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { TypesUpdateOneRequiredWithoutFormTypesNestedInput } from '../types/types-update-one-required-without-form-types-nested.input';

@InputType()
export class PokemonFormTypesUpdateWithoutPokemonFormInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => TypesUpdateOneRequiredWithoutFormTypesNestedInput, {nullable:true})
    type?: TypesUpdateOneRequiredWithoutFormTypesNestedInput;
}

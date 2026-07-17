import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutTypesNestedInput } from '../pokemon/pokemon-update-one-required-without-types-nested.input';

@InputType()
export class PokemonTypesUpdateWithoutTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput;
}

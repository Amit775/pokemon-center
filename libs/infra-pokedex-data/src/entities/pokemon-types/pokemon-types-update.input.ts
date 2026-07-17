import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutTypesNestedInput } from '../pokemon/pokemon-update-one-required-without-types-nested.input';
import { TypesUpdateOneRequiredWithoutPokemonTypesNestedInput } from '../types/types-update-one-required-without-pokemon-types-nested.input';

@InputType()
export class PokemonTypesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonUpdateOneRequiredWithoutTypesNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput;

    @Field(() => TypesUpdateOneRequiredWithoutPokemonTypesNestedInput, {nullable:true})
    type?: TypesUpdateOneRequiredWithoutPokemonTypesNestedInput;
}

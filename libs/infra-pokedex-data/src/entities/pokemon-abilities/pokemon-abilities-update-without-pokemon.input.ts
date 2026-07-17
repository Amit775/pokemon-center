import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput } from '../abilities/abilities-update-one-required-without-pokemon-abilities-nested.input';

@InputType()
export class PokemonAbilitiesUpdateWithoutPokemonInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_hidden?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput, {nullable:true})
    ability?: AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutAbilitiesNestedInput } from '../pokemon/pokemon-update-one-required-without-abilities-nested.input';
import { AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput } from '../abilities/abilities-update-one-required-without-pokemon-abilities-nested.input';

@InputType()
export class PokemonAbilitiesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_hidden?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonUpdateOneRequiredWithoutAbilitiesNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutAbilitiesNestedInput;

    @Field(() => AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput, {nullable:true})
    ability?: AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput;
}

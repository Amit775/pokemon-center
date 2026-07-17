import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput } from '../generations/generations-update-one-required-without-pokemon-form-generations-nested.input';

@InputType()
export class PokemonFormGenerationsUpdateWithoutPokemonFormInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput;
}

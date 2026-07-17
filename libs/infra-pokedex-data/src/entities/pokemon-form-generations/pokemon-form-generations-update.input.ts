import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput } from '../pokemon-forms/pokemon-forms-update-one-required-without-generations-nested.input';
import { GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput } from '../generations/generations-update-one-required-without-pokemon-form-generations-nested.input';

@InputType()
export class PokemonFormGenerationsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput, {nullable:true})
    pokemonForm?: PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput;
}

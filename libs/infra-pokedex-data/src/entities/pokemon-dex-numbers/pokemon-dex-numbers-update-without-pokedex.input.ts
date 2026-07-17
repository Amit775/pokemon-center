import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-dex-numbers-nested.input';

@InputType()
export class PokemonDexNumbersUpdateWithoutPokedexInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokedex_number?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput, {nullable:true})
    species?: PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput;
}

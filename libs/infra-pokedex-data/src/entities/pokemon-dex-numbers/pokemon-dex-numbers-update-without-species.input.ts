import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput } from '../pokedexes/pokedexes-update-one-required-without-dex-numbers-nested.input';

@InputType()
export class PokemonDexNumbersUpdateWithoutSpeciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokedex_number?: IntFieldUpdateOperationsInput;

    @Field(() => PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput, {nullable:true})
    pokedex?: PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput;
}

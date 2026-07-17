import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class PokemonDexNumbersUncheckedUpdateWithoutSpeciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokedex_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokedex_number?: IntFieldUpdateOperationsInput;
}

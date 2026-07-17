import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class PokemonTypesUncheckedUpdateWithoutPokemonInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    type_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    slot?: IntFieldUpdateOperationsInput;
}

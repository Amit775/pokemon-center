import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokemon_move_method_id?: IntFieldUpdateOperationsInput;
}

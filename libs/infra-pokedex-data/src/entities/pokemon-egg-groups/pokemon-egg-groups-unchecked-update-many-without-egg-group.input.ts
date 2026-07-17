import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    species_id?: IntFieldUpdateOperationsInput;
}

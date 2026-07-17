import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class PokemonEggGroupsUncheckedUpdateWithoutSpeciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    egg_group_id?: IntFieldUpdateOperationsInput;
}

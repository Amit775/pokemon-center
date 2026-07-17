import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonSpeciesUncheckedUpdateManyWithoutHabitatNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-habitat-nested.input';

@InputType()
export class PokemonHabitatsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutHabitatNestedInput, {nullable:true})
    species?: PokemonSpeciesUncheckedUpdateManyWithoutHabitatNestedInput;
}

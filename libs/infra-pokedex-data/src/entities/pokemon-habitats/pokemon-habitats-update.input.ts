import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonSpeciesUpdateManyWithoutHabitatNestedInput } from '../pokemon-species/pokemon-species-update-many-without-habitat-nested.input';

@InputType()
export class PokemonHabitatsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUpdateManyWithoutHabitatNestedInput, {nullable:true})
    species?: PokemonSpeciesUpdateManyWithoutHabitatNestedInput;
}

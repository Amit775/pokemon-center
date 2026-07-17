import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonSpeciesUncheckedUpdateManyWithoutColorNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-color-nested.input';

@InputType()
export class PokemonColorsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutColorNestedInput, {nullable:true})
    species?: PokemonSpeciesUncheckedUpdateManyWithoutColorNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonSpeciesUpdateManyWithoutColorNestedInput } from '../pokemon-species/pokemon-species-update-many-without-color-nested.input';

@InputType()
export class PokemonColorsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUpdateManyWithoutColorNestedInput, {nullable:true})
    species?: PokemonSpeciesUpdateManyWithoutColorNestedInput;
}

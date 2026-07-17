import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonSpeciesUncheckedUpdateManyWithoutShapeNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-shape-nested.input';

@InputType()
export class PokemonShapesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutShapeNestedInput, {nullable:true})
    species?: PokemonSpeciesUncheckedUpdateManyWithoutShapeNestedInput;
}

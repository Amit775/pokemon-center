import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonSpeciesUpdateManyWithoutShapeNestedInput } from '../pokemon-species/pokemon-species-update-many-without-shape-nested.input';

@InputType()
export class PokemonShapesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUpdateManyWithoutShapeNestedInput, {nullable:true})
    species?: PokemonSpeciesUpdateManyWithoutShapeNestedInput;
}

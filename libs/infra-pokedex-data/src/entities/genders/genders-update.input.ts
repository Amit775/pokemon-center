import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonEvolutionUpdateManyWithoutGenderNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-gender-nested.input';

@InputType()
export class GendersUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutGenderNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUpdateManyWithoutGenderNestedInput;
}

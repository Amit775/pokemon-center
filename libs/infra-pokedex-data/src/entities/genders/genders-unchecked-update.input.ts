import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutGenderNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-gender-nested.input';

@InputType()
export class GendersUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutGenderNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUncheckedUpdateManyWithoutGenderNestedInput;
}

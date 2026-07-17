import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-evolution-trigger-nested.input';

@InputType()
export class EvolutionTriggersUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerNestedInput;
}

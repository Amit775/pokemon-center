import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-evolution-trigger-nested.input';

@InputType()
export class EvolutionTriggersUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput;
}

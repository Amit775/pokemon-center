import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonSpeciesUncheckedUpdateManyWithoutEvolutionChainNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-evolution-chain-nested.input';

@InputType()
export class EvolutionChainsUncheckedUpdateWithoutBabyTriggerItemInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutEvolutionChainNestedInput, {nullable:true})
    species?: PokemonSpeciesUncheckedUpdateManyWithoutEvolutionChainNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput } from '../pokemon-species/pokemon-species-update-many-without-evolution-chain-nested.input';

@InputType()
export class EvolutionChainsUpdateWithoutBabyTriggerItemInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput, {nullable:true})
    species?: PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput;
}

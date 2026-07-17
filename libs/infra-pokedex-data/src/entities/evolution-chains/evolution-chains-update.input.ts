import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ItemsUpdateOneWithoutBabyTriggerItemsNestedInput } from '../items/items-update-one-without-baby-trigger-items-nested.input';
import { PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput } from '../pokemon-species/pokemon-species-update-many-without-evolution-chain-nested.input';

@InputType()
export class EvolutionChainsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => ItemsUpdateOneWithoutBabyTriggerItemsNestedInput, {nullable:true})
    babyTriggerItem?: ItemsUpdateOneWithoutBabyTriggerItemsNestedInput;

    @Field(() => PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput, {nullable:true})
    species?: PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput;
}

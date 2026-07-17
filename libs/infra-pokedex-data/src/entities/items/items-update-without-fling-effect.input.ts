import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput } from '../item-categories/item-categories-update-one-required-without-items-nested.input';
import { PokemonItemsUpdateManyWithoutItemNestedInput } from '../pokemon-items/pokemon-items-update-many-without-item-nested.input';
import { MachinesUpdateManyWithoutItemNestedInput } from '../machines/machines-update-many-without-item-nested.input';
import { BerriesUpdateManyWithoutItemNestedInput } from '../berries/berries-update-many-without-item-nested.input';
import { ItemGameIndicesUpdateManyWithoutItemNestedInput } from '../item-game-indices/item-game-indices-update-many-without-item-nested.input';
import { ItemFlagMapUpdateManyWithoutItemNestedInput } from '../item-flag-map/item-flag-map-update-many-without-item-nested.input';
import { EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput } from '../evolution-chains/evolution-chains-update-many-without-baby-trigger-item-nested.input';
import { PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-trigger-item-nested.input';
import { PokemonEvolutionUpdateManyWithoutHeldItemNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-held-item-nested.input';

@InputType()
export class ItemsUpdateWithoutFlingEffectInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cost?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fling_power?: NullableIntFieldUpdateOperationsInput;

    @Field(() => ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    category?: ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput;

    @Field(() => PokemonItemsUpdateManyWithoutItemNestedInput, {nullable:true})
    pokemonItems?: PokemonItemsUpdateManyWithoutItemNestedInput;

    @Field(() => MachinesUpdateManyWithoutItemNestedInput, {nullable:true})
    machines?: MachinesUpdateManyWithoutItemNestedInput;

    @Field(() => BerriesUpdateManyWithoutItemNestedInput, {nullable:true})
    berries?: BerriesUpdateManyWithoutItemNestedInput;

    @Field(() => ItemGameIndicesUpdateManyWithoutItemNestedInput, {nullable:true})
    gameIndices?: ItemGameIndicesUpdateManyWithoutItemNestedInput;

    @Field(() => ItemFlagMapUpdateManyWithoutItemNestedInput, {nullable:true})
    flagMap?: ItemFlagMapUpdateManyWithoutItemNestedInput;

    @Field(() => EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput, {nullable:true})
    babyTriggerItems?: EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput, {nullable:true})
    triggerItems?: PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutHeldItemNestedInput, {nullable:true})
    heldItems?: PokemonEvolutionUpdateManyWithoutHeldItemNestedInput;
}

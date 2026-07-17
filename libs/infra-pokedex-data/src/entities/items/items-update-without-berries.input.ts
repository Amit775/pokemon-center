import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput } from '../item-categories/item-categories-update-one-required-without-items-nested.input';
import { ItemFlingEffectsUpdateOneWithoutItemsNestedInput } from '../item-fling-effects/item-fling-effects-update-one-without-items-nested.input';
import { PokemonItemsUpdateManyWithoutItemNestedInput } from '../pokemon-items/pokemon-items-update-many-without-item-nested.input';
import { MachinesUpdateManyWithoutItemNestedInput } from '../machines/machines-update-many-without-item-nested.input';
import { ItemGameIndicesUpdateManyWithoutItemNestedInput } from '../item-game-indices/item-game-indices-update-many-without-item-nested.input';
import { ItemFlagMapUpdateManyWithoutItemNestedInput } from '../item-flag-map/item-flag-map-update-many-without-item-nested.input';
import { EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput } from '../evolution-chains/evolution-chains-update-many-without-baby-trigger-item-nested.input';
import { PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-trigger-item-nested.input';
import { PokemonEvolutionUpdateManyWithoutHeldItemNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-held-item-nested.input';

@InputType()
export class ItemsUpdateWithoutBerriesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    cost?: number;

    @Field(() => Int, {nullable:true})
    fling_power?: number;

    @Field(() => ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    category?: Identity<ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput>;

    @Field(() => ItemFlingEffectsUpdateOneWithoutItemsNestedInput, {nullable:true})
    flingEffect?: Identity<ItemFlingEffectsUpdateOneWithoutItemsNestedInput>;

    @Field(() => PokemonItemsUpdateManyWithoutItemNestedInput, {nullable:true})
    pokemonItems?: Identity<PokemonItemsUpdateManyWithoutItemNestedInput>;

    @Field(() => MachinesUpdateManyWithoutItemNestedInput, {nullable:true})
    machines?: Identity<MachinesUpdateManyWithoutItemNestedInput>;

    @Field(() => ItemGameIndicesUpdateManyWithoutItemNestedInput, {nullable:true})
    gameIndices?: Identity<ItemGameIndicesUpdateManyWithoutItemNestedInput>;

    @Field(() => ItemFlagMapUpdateManyWithoutItemNestedInput, {nullable:true})
    flagMap?: Identity<ItemFlagMapUpdateManyWithoutItemNestedInput>;

    @Field(() => EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput, {nullable:true})
    babyTriggerItems?: Identity<EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput>;

    @Field(() => PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput, {nullable:true})
    triggerItems?: Identity<PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput>;

    @Field(() => PokemonEvolutionUpdateManyWithoutHeldItemNestedInput, {nullable:true})
    heldItems?: Identity<PokemonEvolutionUpdateManyWithoutHeldItemNestedInput>;
}

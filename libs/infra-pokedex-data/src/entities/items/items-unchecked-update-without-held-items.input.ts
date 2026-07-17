import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonItemsUncheckedUpdateManyWithoutItemNestedInput } from '../pokemon-items/pokemon-items-unchecked-update-many-without-item-nested.input';
import { MachinesUncheckedUpdateManyWithoutItemNestedInput } from '../machines/machines-unchecked-update-many-without-item-nested.input';
import { BerriesUncheckedUpdateManyWithoutItemNestedInput } from '../berries/berries-unchecked-update-many-without-item-nested.input';
import { ItemGameIndicesUncheckedUpdateManyWithoutItemNestedInput } from '../item-game-indices/item-game-indices-unchecked-update-many-without-item-nested.input';
import { ItemFlagMapUncheckedUpdateManyWithoutItemNestedInput } from '../item-flag-map/item-flag-map-unchecked-update-many-without-item-nested.input';
import { EvolutionChainsUncheckedUpdateManyWithoutBabyTriggerItemNestedInput } from '../evolution-chains/evolution-chains-unchecked-update-many-without-baby-trigger-item-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutTriggerItemNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-trigger-item-nested.input';

@InputType()
export class ItemsUncheckedUpdateWithoutHeldItemsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => Int, {nullable:true})
    cost?: number;

    @Field(() => Int, {nullable:true})
    fling_power?: number;

    @Field(() => Int, {nullable:true})
    fling_effect_id?: number;

    @Field(() => PokemonItemsUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    pokemonItems?: Identity<PokemonItemsUncheckedUpdateManyWithoutItemNestedInput>;

    @Field(() => MachinesUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    machines?: Identity<MachinesUncheckedUpdateManyWithoutItemNestedInput>;

    @Field(() => BerriesUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    berries?: Identity<BerriesUncheckedUpdateManyWithoutItemNestedInput>;

    @Field(() => ItemGameIndicesUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    gameIndices?: Identity<ItemGameIndicesUncheckedUpdateManyWithoutItemNestedInput>;

    @Field(() => ItemFlagMapUncheckedUpdateManyWithoutItemNestedInput, {nullable:true})
    flagMap?: Identity<ItemFlagMapUncheckedUpdateManyWithoutItemNestedInput>;

    @Field(() => EvolutionChainsUncheckedUpdateManyWithoutBabyTriggerItemNestedInput, {nullable:true})
    babyTriggerItems?: Identity<EvolutionChainsUncheckedUpdateManyWithoutBabyTriggerItemNestedInput>;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutTriggerItemNestedInput, {nullable:true})
    triggerItems?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutTriggerItemNestedInput>;
}

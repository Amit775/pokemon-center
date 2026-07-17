import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonItemsUncheckedCreateNestedManyWithoutItemInput } from '../pokemon-items/pokemon-items-unchecked-create-nested-many-without-item.input';
import { MachinesUncheckedCreateNestedManyWithoutItemInput } from '../machines/machines-unchecked-create-nested-many-without-item.input';
import { BerriesUncheckedCreateNestedManyWithoutItemInput } from '../berries/berries-unchecked-create-nested-many-without-item.input';
import { ItemGameIndicesUncheckedCreateNestedManyWithoutItemInput } from '../item-game-indices/item-game-indices-unchecked-create-nested-many-without-item.input';
import { ItemFlagMapUncheckedCreateNestedManyWithoutItemInput } from '../item-flag-map/item-flag-map-unchecked-create-nested-many-without-item.input';
import { EvolutionChainsUncheckedCreateNestedManyWithoutBabyTriggerItemInput } from '../evolution-chains/evolution-chains-unchecked-create-nested-many-without-baby-trigger-item.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutTriggerItemInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-trigger-item.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutHeldItemInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-held-item.input';

@InputType()
export class ItemsUncheckedCreateWithoutCategoryInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    cost!: number;

    @Field(() => Int, {nullable:true})
    fling_power?: number;

    @Field(() => Int, {nullable:true})
    fling_effect_id?: number;

    @Field(() => PokemonItemsUncheckedCreateNestedManyWithoutItemInput, {nullable:true})
    pokemonItems?: PokemonItemsUncheckedCreateNestedManyWithoutItemInput;

    @Field(() => MachinesUncheckedCreateNestedManyWithoutItemInput, {nullable:true})
    machines?: MachinesUncheckedCreateNestedManyWithoutItemInput;

    @Field(() => BerriesUncheckedCreateNestedManyWithoutItemInput, {nullable:true})
    berries?: BerriesUncheckedCreateNestedManyWithoutItemInput;

    @Field(() => ItemGameIndicesUncheckedCreateNestedManyWithoutItemInput, {nullable:true})
    gameIndices?: ItemGameIndicesUncheckedCreateNestedManyWithoutItemInput;

    @Field(() => ItemFlagMapUncheckedCreateNestedManyWithoutItemInput, {nullable:true})
    flagMap?: ItemFlagMapUncheckedCreateNestedManyWithoutItemInput;

    @Field(() => EvolutionChainsUncheckedCreateNestedManyWithoutBabyTriggerItemInput, {nullable:true})
    babyTriggerItems?: EvolutionChainsUncheckedCreateNestedManyWithoutBabyTriggerItemInput;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutTriggerItemInput, {nullable:true})
    triggerItems?: PokemonEvolutionUncheckedCreateNestedManyWithoutTriggerItemInput;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutHeldItemInput, {nullable:true})
    heldItems?: PokemonEvolutionUncheckedCreateNestedManyWithoutHeldItemInput;
}

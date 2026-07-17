import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemCategoriesCreateNestedOneWithoutItemsInput } from '../item-categories/item-categories-create-nested-one-without-items.input';
import { ItemFlingEffectsCreateNestedOneWithoutItemsInput } from '../item-fling-effects/item-fling-effects-create-nested-one-without-items.input';
import { PokemonItemsCreateNestedManyWithoutItemInput } from '../pokemon-items/pokemon-items-create-nested-many-without-item.input';
import { MachinesCreateNestedManyWithoutItemInput } from '../machines/machines-create-nested-many-without-item.input';
import { BerriesCreateNestedManyWithoutItemInput } from '../berries/berries-create-nested-many-without-item.input';
import { ItemGameIndicesCreateNestedManyWithoutItemInput } from '../item-game-indices/item-game-indices-create-nested-many-without-item.input';
import { EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput } from '../evolution-chains/evolution-chains-create-nested-many-without-baby-trigger-item.input';
import { PokemonEvolutionCreateNestedManyWithoutTriggerItemInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-trigger-item.input';
import { PokemonEvolutionCreateNestedManyWithoutHeldItemInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-held-item.input';

@InputType()
export class ItemsCreateWithoutFlagMapInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    cost!: number;

    @Field(() => Int, {nullable:true})
    fling_power?: number;

    @Field(() => ItemCategoriesCreateNestedOneWithoutItemsInput, {nullable:false})
    category!: ItemCategoriesCreateNestedOneWithoutItemsInput;

    @Field(() => ItemFlingEffectsCreateNestedOneWithoutItemsInput, {nullable:true})
    flingEffect?: ItemFlingEffectsCreateNestedOneWithoutItemsInput;

    @Field(() => PokemonItemsCreateNestedManyWithoutItemInput, {nullable:true})
    pokemonItems?: PokemonItemsCreateNestedManyWithoutItemInput;

    @Field(() => MachinesCreateNestedManyWithoutItemInput, {nullable:true})
    machines?: MachinesCreateNestedManyWithoutItemInput;

    @Field(() => BerriesCreateNestedManyWithoutItemInput, {nullable:true})
    berries?: BerriesCreateNestedManyWithoutItemInput;

    @Field(() => ItemGameIndicesCreateNestedManyWithoutItemInput, {nullable:true})
    gameIndices?: ItemGameIndicesCreateNestedManyWithoutItemInput;

    @Field(() => EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput, {nullable:true})
    babyTriggerItems?: EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutTriggerItemInput, {nullable:true})
    triggerItems?: PokemonEvolutionCreateNestedManyWithoutTriggerItemInput;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutHeldItemInput, {nullable:true})
    heldItems?: PokemonEvolutionCreateNestedManyWithoutHeldItemInput;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemCategories } from '../item-categories/item-categories.model';
import type { Identity } from 'identity-type';
import { ItemFlingEffects } from '../item-fling-effects/item-fling-effects.model';
import { PokemonItems } from '../pokemon-items/pokemon-items.model';
import { Machines } from '../machines/machines.model';
import { Berries } from '../berries/berries.model';
import { ItemGameIndices } from '../item-game-indices/item-game-indices.model';
import { ItemFlagMap } from '../item-flag-map/item-flag-map.model';
import { EvolutionChains } from '../evolution-chains/evolution-chains.model';
import { PokemonEvolution } from '../pokemon-evolution/pokemon-evolution.model';
import { ItemsCount } from './items-count.output';

/**
 * @@TypeGraphQL.type(name: "Item")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Item")'})
export class Items {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Int, {nullable:false})
    cost!: number;

    @Field(() => Int, {nullable:true})
    fling_power!: number | null;

    @Field(() => Int, {nullable:true})
    fling_effect_id!: number | null;

    @Field(() => ItemCategories, {nullable:false})
    category?: Identity<ItemCategories>;

    @Field(() => ItemFlingEffects, {nullable:true})
    flingEffect?: Identity<ItemFlingEffects> | null;

    @Field(() => [PokemonItems], {nullable:false})
    pokemonItems?: Array<PokemonItems>;

    @Field(() => [Machines], {nullable:false})
    machines?: Array<Machines>;

    @Field(() => [Berries], {nullable:false})
    berries?: Array<Berries>;

    @Field(() => [ItemGameIndices], {nullable:false})
    gameIndices?: Array<ItemGameIndices>;

    @Field(() => [ItemFlagMap], {nullable:false})
    flagMap?: Array<ItemFlagMap>;

    @Field(() => [EvolutionChains], {nullable:false})
    babyTriggerItems?: Array<EvolutionChains>;

    @Field(() => [PokemonEvolution], {nullable:false})
    triggerItems?: Array<PokemonEvolution>;

    @Field(() => [PokemonEvolution], {nullable:false})
    heldItems?: Array<PokemonEvolution>;

    @Field(() => ItemsCount, {nullable:false})
    _count?: Identity<ItemsCount>;
}

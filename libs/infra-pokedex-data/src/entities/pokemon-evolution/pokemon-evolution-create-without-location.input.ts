import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateNestedOneWithoutEvolutionInput } from '../pokemon-species/pokemon-species-create-nested-one-without-evolution.input';
import { EvolutionTriggersCreateNestedOneWithoutEvolutionInput } from '../evolution-triggers/evolution-triggers-create-nested-one-without-evolution.input';
import { ItemsCreateNestedOneWithoutTriggerItemsInput } from '../items/items-create-nested-one-without-trigger-items.input';
import { GendersCreateNestedOneWithoutEvolutionInput } from '../genders/genders-create-nested-one-without-evolution.input';
import { ItemsCreateNestedOneWithoutHeldItemsInput } from '../items/items-create-nested-one-without-held-items.input';
import { MovesCreateNestedOneWithoutKnownMovesInput } from '../moves/moves-create-nested-one-without-known-moves.input';
import { TypesCreateNestedOneWithoutKnownMoveTypesInput } from '../types/types-create-nested-one-without-known-move-types.input';
import { PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-party-species.input';
import { TypesCreateNestedOneWithoutPartyTypesInput } from '../types/types-create-nested-one-without-party-types.input';
import { PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-trade-species.input';

@InputType()
export class PokemonEvolutionCreateWithoutLocationInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    minimum_level?: number;

    @Field(() => String, {nullable:true})
    time_of_day?: string;

    @Field(() => Int, {nullable:true})
    minimum_happiness?: number;

    @Field(() => Int, {nullable:true})
    minimum_beauty?: number;

    @Field(() => Int, {nullable:true})
    minimum_affection?: number;

    @Field(() => Int, {nullable:true})
    relative_physical_stats?: number;

    @Field(() => Int, {nullable:false})
    needs_overworld_rain!: number;

    @Field(() => Int, {nullable:false})
    turn_upside_down!: number;

    @Field(() => PokemonSpeciesCreateNestedOneWithoutEvolutionInput, {nullable:false})
    evolvedSpecies!: Identity<PokemonSpeciesCreateNestedOneWithoutEvolutionInput>;

    @Field(() => EvolutionTriggersCreateNestedOneWithoutEvolutionInput, {nullable:false})
    evolutionTrigger!: Identity<EvolutionTriggersCreateNestedOneWithoutEvolutionInput>;

    @Field(() => ItemsCreateNestedOneWithoutTriggerItemsInput, {nullable:true})
    triggerItem?: Identity<ItemsCreateNestedOneWithoutTriggerItemsInput>;

    @Field(() => GendersCreateNestedOneWithoutEvolutionInput, {nullable:true})
    gender?: Identity<GendersCreateNestedOneWithoutEvolutionInput>;

    @Field(() => ItemsCreateNestedOneWithoutHeldItemsInput, {nullable:true})
    heldItem?: Identity<ItemsCreateNestedOneWithoutHeldItemsInput>;

    @Field(() => MovesCreateNestedOneWithoutKnownMovesInput, {nullable:true})
    knownMove?: Identity<MovesCreateNestedOneWithoutKnownMovesInput>;

    @Field(() => TypesCreateNestedOneWithoutKnownMoveTypesInput, {nullable:true})
    knownMoveType?: Identity<TypesCreateNestedOneWithoutKnownMoveTypesInput>;

    @Field(() => PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput, {nullable:true})
    partySpecies?: Identity<PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput>;

    @Field(() => TypesCreateNestedOneWithoutPartyTypesInput, {nullable:true})
    partyType?: Identity<TypesCreateNestedOneWithoutPartyTypesInput>;

    @Field(() => PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput, {nullable:true})
    tradeSpecies?: Identity<PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput>;
}

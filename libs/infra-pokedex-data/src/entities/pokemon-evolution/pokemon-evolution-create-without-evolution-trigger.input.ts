import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesCreateNestedOneWithoutEvolutionInput } from '../pokemon-species/pokemon-species-create-nested-one-without-evolution.input';
import { ItemsCreateNestedOneWithoutTriggerItemsInput } from '../items/items-create-nested-one-without-trigger-items.input';
import { GendersCreateNestedOneWithoutEvolutionInput } from '../genders/genders-create-nested-one-without-evolution.input';
import { LocationsCreateNestedOneWithoutEvolutionInput } from '../locations/locations-create-nested-one-without-evolution.input';
import { ItemsCreateNestedOneWithoutHeldItemsInput } from '../items/items-create-nested-one-without-held-items.input';
import { MovesCreateNestedOneWithoutKnownMovesInput } from '../moves/moves-create-nested-one-without-known-moves.input';
import { TypesCreateNestedOneWithoutKnownMoveTypesInput } from '../types/types-create-nested-one-without-known-move-types.input';
import { PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-party-species.input';
import { TypesCreateNestedOneWithoutPartyTypesInput } from '../types/types-create-nested-one-without-party-types.input';
import { PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-trade-species.input';

@InputType()
export class PokemonEvolutionCreateWithoutEvolutionTriggerInput {

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
    evolvedSpecies!: PokemonSpeciesCreateNestedOneWithoutEvolutionInput;

    @Field(() => ItemsCreateNestedOneWithoutTriggerItemsInput, {nullable:true})
    triggerItem?: ItemsCreateNestedOneWithoutTriggerItemsInput;

    @Field(() => GendersCreateNestedOneWithoutEvolutionInput, {nullable:true})
    gender?: GendersCreateNestedOneWithoutEvolutionInput;

    @Field(() => LocationsCreateNestedOneWithoutEvolutionInput, {nullable:true})
    location?: LocationsCreateNestedOneWithoutEvolutionInput;

    @Field(() => ItemsCreateNestedOneWithoutHeldItemsInput, {nullable:true})
    heldItem?: ItemsCreateNestedOneWithoutHeldItemsInput;

    @Field(() => MovesCreateNestedOneWithoutKnownMovesInput, {nullable:true})
    knownMove?: MovesCreateNestedOneWithoutKnownMovesInput;

    @Field(() => TypesCreateNestedOneWithoutKnownMoveTypesInput, {nullable:true})
    knownMoveType?: TypesCreateNestedOneWithoutKnownMoveTypesInput;

    @Field(() => PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput, {nullable:true})
    partySpecies?: PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;

    @Field(() => TypesCreateNestedOneWithoutPartyTypesInput, {nullable:true})
    partyType?: TypesCreateNestedOneWithoutPartyTypesInput;

    @Field(() => PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput, {nullable:true})
    tradeSpecies?: PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
}

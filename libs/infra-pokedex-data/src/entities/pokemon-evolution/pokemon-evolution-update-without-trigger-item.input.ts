import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-evolution-nested.input';
import { EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput } from '../evolution-triggers/evolution-triggers-update-one-required-without-evolution-nested.input';
import { GendersUpdateOneWithoutEvolutionNestedInput } from '../genders/genders-update-one-without-evolution-nested.input';
import { LocationsUpdateOneWithoutEvolutionNestedInput } from '../locations/locations-update-one-without-evolution-nested.input';
import { ItemsUpdateOneWithoutHeldItemsNestedInput } from '../items/items-update-one-without-held-items-nested.input';
import { MovesUpdateOneWithoutKnownMovesNestedInput } from '../moves/moves-update-one-without-known-moves-nested.input';
import { TypesUpdateOneWithoutKnownMoveTypesNestedInput } from '../types/types-update-one-without-known-move-types-nested.input';
import { PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput } from '../pokemon-species/pokemon-species-update-one-without-party-species-nested.input';
import { TypesUpdateOneWithoutPartyTypesNestedInput } from '../types/types-update-one-without-party-types-nested.input';
import { PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput } from '../pokemon-species/pokemon-species-update-one-without-trade-species-nested.input';

@InputType()
export class PokemonEvolutionUpdateWithoutTriggerItemInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    needs_overworld_rain?: number;

    @Field(() => Int, {nullable:true})
    turn_upside_down?: number;

    @Field(() => PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput, {nullable:true})
    evolvedSpecies?: Identity<PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput>;

    @Field(() => EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput, {nullable:true})
    evolutionTrigger?: Identity<EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput>;

    @Field(() => GendersUpdateOneWithoutEvolutionNestedInput, {nullable:true})
    gender?: Identity<GendersUpdateOneWithoutEvolutionNestedInput>;

    @Field(() => LocationsUpdateOneWithoutEvolutionNestedInput, {nullable:true})
    location?: Identity<LocationsUpdateOneWithoutEvolutionNestedInput>;

    @Field(() => ItemsUpdateOneWithoutHeldItemsNestedInput, {nullable:true})
    heldItem?: Identity<ItemsUpdateOneWithoutHeldItemsNestedInput>;

    @Field(() => MovesUpdateOneWithoutKnownMovesNestedInput, {nullable:true})
    knownMove?: Identity<MovesUpdateOneWithoutKnownMovesNestedInput>;

    @Field(() => TypesUpdateOneWithoutKnownMoveTypesNestedInput, {nullable:true})
    knownMoveType?: Identity<TypesUpdateOneWithoutKnownMoveTypesNestedInput>;

    @Field(() => PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput, {nullable:true})
    partySpecies?: Identity<PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput>;

    @Field(() => TypesUpdateOneWithoutPartyTypesNestedInput, {nullable:true})
    partyType?: Identity<TypesUpdateOneWithoutPartyTypesNestedInput>;

    @Field(() => PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput, {nullable:true})
    tradeSpecies?: Identity<PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput>;
}

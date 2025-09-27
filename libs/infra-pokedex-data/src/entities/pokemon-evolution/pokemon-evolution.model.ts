import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import { EvolutionTriggers } from '../evolution-triggers/evolution-triggers.model';
import { Items } from '../items/items.model';
import { Genders } from '../genders/genders.model';
import { Locations } from '../locations/locations.model';
import { Moves } from '../moves/moves.model';
import { Types } from '../types/types.model';

@ObjectType()
export class PokemonEvolution {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    evolved_species_id!: number;

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:true})
    trigger_item_id!: number | null;

    @Field(() => Int, {nullable:true})
    minimum_level!: number | null;

    @Field(() => Int, {nullable:true})
    gender_id!: number | null;

    @Field(() => Int, {nullable:true})
    location_id!: number | null;

    @Field(() => Int, {nullable:true})
    held_item_id!: number | null;

    @Field(() => String, {nullable:true})
    time_of_day!: string | null;

    @Field(() => Int, {nullable:true})
    known_move_id!: number | null;

    @Field(() => Int, {nullable:true})
    known_move_type_id!: number | null;

    @Field(() => Int, {nullable:true})
    minimum_happiness!: number | null;

    @Field(() => Int, {nullable:true})
    minimum_beauty!: number | null;

    @Field(() => Int, {nullable:true})
    minimum_affection!: number | null;

    @Field(() => Int, {nullable:true})
    relative_physical_stats!: number | null;

    @Field(() => Int, {nullable:true})
    party_species_id!: number | null;

    @Field(() => Int, {nullable:true})
    party_type_id!: number | null;

    @Field(() => Int, {nullable:true})
    trade_species_id!: number | null;

    @Field(() => Int, {nullable:false})
    needs_overworld_rain!: number;

    @Field(() => Int, {nullable:false})
    turn_upside_down!: number;

    @Field(() => PokemonSpecies, {nullable:false})
    evolvedSpecies?: PokemonSpecies;

    @Field(() => EvolutionTriggers, {nullable:false})
    evolutionTrigger?: EvolutionTriggers;

    @Field(() => Items, {nullable:true})
    triggerItem?: Items | null;

    @Field(() => Genders, {nullable:true})
    gender?: Genders | null;

    @Field(() => Locations, {nullable:true})
    location?: Locations | null;

    @Field(() => Items, {nullable:true})
    heldItem?: Items | null;

    @Field(() => Moves, {nullable:true})
    knownMove?: Moves | null;

    @Field(() => Types, {nullable:true})
    knownMoveType?: Types | null;

    @Field(() => PokemonSpecies, {nullable:true})
    partySpecies?: PokemonSpecies | null;

    @Field(() => Types, {nullable:true})
    partyType?: Types | null;

    @Field(() => PokemonSpecies, {nullable:true})
    tradeSpecies?: PokemonSpecies | null;
}

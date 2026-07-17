import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonSpeciesScalarRelationFilter } from '../pokemon-species/pokemon-species-scalar-relation-filter.input';
import { EvolutionTriggersScalarRelationFilter } from '../evolution-triggers/evolution-triggers-scalar-relation-filter.input';
import { ItemsScalarRelationFilter } from '../items/items-scalar-relation-filter.input';
import { GendersScalarRelationFilter } from '../genders/genders-scalar-relation-filter.input';
import { LocationsScalarRelationFilter } from '../locations/locations-scalar-relation-filter.input';
import { MovesScalarRelationFilter } from '../moves/moves-scalar-relation-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';

@InputType()
export class PokemonEvolutionWhereInput {

    @Field(() => [PokemonEvolutionWhereInput], {nullable:true})
    AND?: Array<PokemonEvolutionWhereInput>;

    @Field(() => [PokemonEvolutionWhereInput], {nullable:true})
    OR?: Array<PokemonEvolutionWhereInput>;

    @Field(() => [PokemonEvolutionWhereInput], {nullable:true})
    NOT?: Array<PokemonEvolutionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    evolved_species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    evolution_trigger_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    trigger_item_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    minimum_level?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    gender_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    held_item_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    time_of_day?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    known_move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    known_move_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    minimum_happiness?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    minimum_beauty?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    minimum_affection?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    relative_physical_stats?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    party_species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    party_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    trade_species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    needs_overworld_rain?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    turn_upside_down?: Identity<IntFilter>;

    @Field(() => PokemonSpeciesScalarRelationFilter, {nullable:true})
    evolvedSpecies?: Identity<PokemonSpeciesScalarRelationFilter>;

    @Field(() => EvolutionTriggersScalarRelationFilter, {nullable:true})
    evolutionTrigger?: Identity<EvolutionTriggersScalarRelationFilter>;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    triggerItem?: Identity<ItemsScalarRelationFilter>;

    @Field(() => GendersScalarRelationFilter, {nullable:true})
    gender?: Identity<GendersScalarRelationFilter>;

    @Field(() => LocationsScalarRelationFilter, {nullable:true})
    location?: Identity<LocationsScalarRelationFilter>;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    heldItem?: Identity<ItemsScalarRelationFilter>;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    knownMove?: Identity<MovesScalarRelationFilter>;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    knownMoveType?: Identity<TypesScalarRelationFilter>;

    @Field(() => PokemonSpeciesScalarRelationFilter, {nullable:true})
    partySpecies?: Identity<PokemonSpeciesScalarRelationFilter>;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    partyType?: Identity<TypesScalarRelationFilter>;

    @Field(() => PokemonSpeciesScalarRelationFilter, {nullable:true})
    tradeSpecies?: Identity<PokemonSpeciesScalarRelationFilter>;
}

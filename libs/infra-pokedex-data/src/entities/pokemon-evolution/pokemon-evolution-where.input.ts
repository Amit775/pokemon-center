import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PokemonSpeciesScalarRelationFilter } from '../pokemon-species/pokemon-species-scalar-relation-filter.input';
import { EvolutionTriggersScalarRelationFilter } from '../evolution-triggers/evolution-triggers-scalar-relation-filter.input';
import { ItemsNullableScalarRelationFilter } from '../items/items-nullable-scalar-relation-filter.input';
import { GendersNullableScalarRelationFilter } from '../genders/genders-nullable-scalar-relation-filter.input';
import { LocationsNullableScalarRelationFilter } from '../locations/locations-nullable-scalar-relation-filter.input';
import { MovesNullableScalarRelationFilter } from '../moves/moves-nullable-scalar-relation-filter.input';
import { TypesNullableScalarRelationFilter } from '../types/types-nullable-scalar-relation-filter.input';
import { PokemonSpeciesNullableScalarRelationFilter } from '../pokemon-species/pokemon-species-nullable-scalar-relation-filter.input';

@InputType()
export class PokemonEvolutionWhereInput {

    @Field(() => [PokemonEvolutionWhereInput], {nullable:true})
    AND?: Array<PokemonEvolutionWhereInput>;

    @Field(() => [PokemonEvolutionWhereInput], {nullable:true})
    OR?: Array<PokemonEvolutionWhereInput>;

    @Field(() => [PokemonEvolutionWhereInput], {nullable:true})
    NOT?: Array<PokemonEvolutionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    evolved_species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    evolution_trigger_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    trigger_item_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_level?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    gender_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    location_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    held_item_id?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    time_of_day?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    known_move_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    known_move_type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_happiness?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_beauty?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    minimum_affection?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    relative_physical_stats?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    party_species_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    party_type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    trade_species_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    needs_overworld_rain?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    turn_upside_down?: IntFilter;

    @Field(() => PokemonSpeciesScalarRelationFilter, {nullable:true})
    evolvedSpecies?: PokemonSpeciesScalarRelationFilter;

    @Field(() => EvolutionTriggersScalarRelationFilter, {nullable:true})
    evolutionTrigger?: EvolutionTriggersScalarRelationFilter;

    @Field(() => ItemsNullableScalarRelationFilter, {nullable:true})
    triggerItem?: ItemsNullableScalarRelationFilter;

    @Field(() => GendersNullableScalarRelationFilter, {nullable:true})
    gender?: GendersNullableScalarRelationFilter;

    @Field(() => LocationsNullableScalarRelationFilter, {nullable:true})
    location?: LocationsNullableScalarRelationFilter;

    @Field(() => ItemsNullableScalarRelationFilter, {nullable:true})
    heldItem?: ItemsNullableScalarRelationFilter;

    @Field(() => MovesNullableScalarRelationFilter, {nullable:true})
    knownMove?: MovesNullableScalarRelationFilter;

    @Field(() => TypesNullableScalarRelationFilter, {nullable:true})
    knownMoveType?: TypesNullableScalarRelationFilter;

    @Field(() => PokemonSpeciesNullableScalarRelationFilter, {nullable:true})
    partySpecies?: PokemonSpeciesNullableScalarRelationFilter;

    @Field(() => TypesNullableScalarRelationFilter, {nullable:true})
    partyType?: TypesNullableScalarRelationFilter;

    @Field(() => PokemonSpeciesNullableScalarRelationFilter, {nullable:true})
    tradeSpecies?: PokemonSpeciesNullableScalarRelationFilter;
}

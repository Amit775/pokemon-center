import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonSpeciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';
import { EvolutionTriggersOrderByWithRelationInput } from '../evolution-triggers/evolution-triggers-order-by-with-relation.input';
import { ItemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';
import { GendersOrderByWithRelationInput } from '../genders/genders-order-by-with-relation.input';
import { LocationsOrderByWithRelationInput } from '../locations/locations-order-by-with-relation.input';
import { MovesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';

@InputType()
export class PokemonEvolutionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    evolved_species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    evolution_trigger_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    trigger_item_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_level?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    gender_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    location_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    held_item_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    time_of_day?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    known_move_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    known_move_type_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_happiness?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_beauty?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_affection?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    relative_physical_stats?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    party_species_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    party_type_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    trade_species_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    needs_overworld_rain?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    turn_upside_down?: `${SortOrder}`;

    @Field(() => PokemonSpeciesOrderByWithRelationInput, {nullable:true})
    evolvedSpecies?: PokemonSpeciesOrderByWithRelationInput;

    @Field(() => EvolutionTriggersOrderByWithRelationInput, {nullable:true})
    evolutionTrigger?: EvolutionTriggersOrderByWithRelationInput;

    @Field(() => ItemsOrderByWithRelationInput, {nullable:true})
    triggerItem?: ItemsOrderByWithRelationInput;

    @Field(() => GendersOrderByWithRelationInput, {nullable:true})
    gender?: GendersOrderByWithRelationInput;

    @Field(() => LocationsOrderByWithRelationInput, {nullable:true})
    location?: LocationsOrderByWithRelationInput;

    @Field(() => ItemsOrderByWithRelationInput, {nullable:true})
    heldItem?: ItemsOrderByWithRelationInput;

    @Field(() => MovesOrderByWithRelationInput, {nullable:true})
    knownMove?: MovesOrderByWithRelationInput;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    knownMoveType?: TypesOrderByWithRelationInput;

    @Field(() => PokemonSpeciesOrderByWithRelationInput, {nullable:true})
    partySpecies?: PokemonSpeciesOrderByWithRelationInput;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    partyType?: TypesOrderByWithRelationInput;

    @Field(() => PokemonSpeciesOrderByWithRelationInput, {nullable:true})
    tradeSpecies?: PokemonSpeciesOrderByWithRelationInput;
}

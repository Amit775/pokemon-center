import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VersionGroupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { EncountersOrderByRelationAggregateInput } from '../encounters/encounters-order-by-relation-aggregate.input';
import { PokemonItemsOrderByRelationAggregateInput } from '../pokemon-items/pokemon-items-order-by-relation-aggregate.input';
import { PokemonGameIndicesOrderByRelationAggregateInput } from '../pokemon-game-indices/pokemon-game-indices-order-by-relation-aggregate.input';
import { LocationAreaEncounterRatesOrderByRelationAggregateInput } from '../location-area-encounter-rates/location-area-encounter-rates-order-by-relation-aggregate.input';

@InputType()
export class VersionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => VersionGroupsOrderByWithRelationInput, {nullable:true})
    versionGroup?: VersionGroupsOrderByWithRelationInput;

    @Field(() => EncountersOrderByRelationAggregateInput, {nullable:true})
    encounters?: EncountersOrderByRelationAggregateInput;

    @Field(() => PokemonItemsOrderByRelationAggregateInput, {nullable:true})
    pokemonItems?: PokemonItemsOrderByRelationAggregateInput;

    @Field(() => PokemonGameIndicesOrderByRelationAggregateInput, {nullable:true})
    pokemonGameIndices?: PokemonGameIndicesOrderByRelationAggregateInput;

    @Field(() => LocationAreaEncounterRatesOrderByRelationAggregateInput, {nullable:true})
    locationAreaEncounterRates?: LocationAreaEncounterRatesOrderByRelationAggregateInput;
}

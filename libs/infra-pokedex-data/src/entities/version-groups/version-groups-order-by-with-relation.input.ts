import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { GenerationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { VersionsOrderByRelationAggregateInput } from '../versions/versions-order-by-relation-aggregate.input';
import { EncounterSlotsOrderByRelationAggregateInput } from '../encounter-slots/encounter-slots-order-by-relation-aggregate.input';
import { MachinesOrderByRelationAggregateInput } from '../machines/machines-order-by-relation-aggregate.input';
import { VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-order-by-relation-aggregate.input';
import { VersionGroupRegionsOrderByRelationAggregateInput } from '../version-group-regions/version-group-regions-order-by-relation-aggregate.input';
import { PokedexVersionGroupsOrderByRelationAggregateInput } from '../pokedex-version-groups/pokedex-version-groups-order-by-relation-aggregate.input';
import { PokemonMovesOrderByRelationAggregateInput } from '../pokemon-moves/pokemon-moves-order-by-relation-aggregate.input';
import { PokemonFormsOrderByRelationAggregateInput } from '../pokemon-forms/pokemon-forms-order-by-relation-aggregate.input';

@InputType()
export class VersionGroupsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: Identity<GenerationsOrderByWithRelationInput>;

    @Field(() => VersionsOrderByRelationAggregateInput, {nullable:true})
    versions?: Identity<VersionsOrderByRelationAggregateInput>;

    @Field(() => EncounterSlotsOrderByRelationAggregateInput, {nullable:true})
    encounterSlots?: Identity<EncounterSlotsOrderByRelationAggregateInput>;

    @Field(() => MachinesOrderByRelationAggregateInput, {nullable:true})
    machines?: Identity<MachinesOrderByRelationAggregateInput>;

    @Field(() => VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput, {nullable:true})
    versionGroupPokemonMoveMethods?: Identity<VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput>;

    @Field(() => VersionGroupRegionsOrderByRelationAggregateInput, {nullable:true})
    versionGroupRegions?: Identity<VersionGroupRegionsOrderByRelationAggregateInput>;

    @Field(() => PokedexVersionGroupsOrderByRelationAggregateInput, {nullable:true})
    pokedexVersionGroups?: Identity<PokedexVersionGroupsOrderByRelationAggregateInput>;

    @Field(() => PokemonMovesOrderByRelationAggregateInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesOrderByRelationAggregateInput>;

    @Field(() => PokemonFormsOrderByRelationAggregateInput, {nullable:true})
    pokemonForms?: Identity<PokemonFormsOrderByRelationAggregateInput>;
}

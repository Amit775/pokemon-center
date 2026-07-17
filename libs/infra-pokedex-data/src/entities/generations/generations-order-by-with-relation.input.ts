import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { RegionsOrderByWithRelationInput } from '../regions/regions-order-by-with-relation.input';
import { PokemonSpeciesOrderByRelationAggregateInput } from '../pokemon-species/pokemon-species-order-by-relation-aggregate.input';
import { MovesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';
import { TypesOrderByRelationAggregateInput } from '../types/types-order-by-relation-aggregate.input';
import { AbilitiesOrderByRelationAggregateInput } from '../abilities/abilities-order-by-relation-aggregate.input';
import { PokemonFormGenerationsOrderByRelationAggregateInput } from '../pokemon-form-generations/pokemon-form-generations-order-by-relation-aggregate.input';
import { ItemGameIndicesOrderByRelationAggregateInput } from '../item-game-indices/item-game-indices-order-by-relation-aggregate.input';
import { TypeGameIndicesOrderByRelationAggregateInput } from '../type-game-indices/type-game-indices-order-by-relation-aggregate.input';
import { LocationGameIndicesOrderByRelationAggregateInput } from '../location-game-indices/location-game-indices-order-by-relation-aggregate.input';
import { VersionGroupsOrderByRelationAggregateInput } from '../version-groups/version-groups-order-by-relation-aggregate.input';

@InputType()
export class GenerationsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    main_region_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => RegionsOrderByWithRelationInput, {nullable:true})
    region?: Identity<RegionsOrderByWithRelationInput>;

    @Field(() => PokemonSpeciesOrderByRelationAggregateInput, {nullable:true})
    pokemonSpecies?: Identity<PokemonSpeciesOrderByRelationAggregateInput>;

    @Field(() => MovesOrderByRelationAggregateInput, {nullable:true})
    moves?: Identity<MovesOrderByRelationAggregateInput>;

    @Field(() => TypesOrderByRelationAggregateInput, {nullable:true})
    types?: Identity<TypesOrderByRelationAggregateInput>;

    @Field(() => AbilitiesOrderByRelationAggregateInput, {nullable:true})
    abilities?: Identity<AbilitiesOrderByRelationAggregateInput>;

    @Field(() => PokemonFormGenerationsOrderByRelationAggregateInput, {nullable:true})
    pokemonFormGenerations?: Identity<PokemonFormGenerationsOrderByRelationAggregateInput>;

    @Field(() => ItemGameIndicesOrderByRelationAggregateInput, {nullable:true})
    itemGameIndices?: Identity<ItemGameIndicesOrderByRelationAggregateInput>;

    @Field(() => TypeGameIndicesOrderByRelationAggregateInput, {nullable:true})
    typeGameIndices?: Identity<TypeGameIndicesOrderByRelationAggregateInput>;

    @Field(() => LocationGameIndicesOrderByRelationAggregateInput, {nullable:true})
    locationGameIndices?: Identity<LocationGameIndicesOrderByRelationAggregateInput>;

    @Field(() => VersionGroupsOrderByRelationAggregateInput, {nullable:true})
    versionGroups?: Identity<VersionGroupsOrderByRelationAggregateInput>;
}

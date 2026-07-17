import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ItemCategoriesOrderByWithRelationInput } from '../item-categories/item-categories-order-by-with-relation.input';
import { ItemFlingEffectsOrderByWithRelationInput } from '../item-fling-effects/item-fling-effects-order-by-with-relation.input';
import { PokemonItemsOrderByRelationAggregateInput } from '../pokemon-items/pokemon-items-order-by-relation-aggregate.input';
import { MachinesOrderByRelationAggregateInput } from '../machines/machines-order-by-relation-aggregate.input';
import { BerriesOrderByRelationAggregateInput } from '../berries/berries-order-by-relation-aggregate.input';
import { ItemGameIndicesOrderByRelationAggregateInput } from '../item-game-indices/item-game-indices-order-by-relation-aggregate.input';
import { ItemFlagMapOrderByRelationAggregateInput } from '../item-flag-map/item-flag-map-order-by-relation-aggregate.input';
import { EvolutionChainsOrderByRelationAggregateInput } from '../evolution-chains/evolution-chains-order-by-relation-aggregate.input';
import { PokemonEvolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';

@InputType()
export class ItemsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    category_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    cost?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    fling_power?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    fling_effect_id?: Identity<SortOrderInput>;

    @Field(() => ItemCategoriesOrderByWithRelationInput, {nullable:true})
    category?: Identity<ItemCategoriesOrderByWithRelationInput>;

    @Field(() => ItemFlingEffectsOrderByWithRelationInput, {nullable:true})
    flingEffect?: Identity<ItemFlingEffectsOrderByWithRelationInput>;

    @Field(() => PokemonItemsOrderByRelationAggregateInput, {nullable:true})
    pokemonItems?: Identity<PokemonItemsOrderByRelationAggregateInput>;

    @Field(() => MachinesOrderByRelationAggregateInput, {nullable:true})
    machines?: Identity<MachinesOrderByRelationAggregateInput>;

    @Field(() => BerriesOrderByRelationAggregateInput, {nullable:true})
    berries?: Identity<BerriesOrderByRelationAggregateInput>;

    @Field(() => ItemGameIndicesOrderByRelationAggregateInput, {nullable:true})
    gameIndices?: Identity<ItemGameIndicesOrderByRelationAggregateInput>;

    @Field(() => ItemFlagMapOrderByRelationAggregateInput, {nullable:true})
    flagMap?: Identity<ItemFlagMapOrderByRelationAggregateInput>;

    @Field(() => EvolutionChainsOrderByRelationAggregateInput, {nullable:true})
    babyTriggerItems?: Identity<EvolutionChainsOrderByRelationAggregateInput>;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    triggerItems?: Identity<PokemonEvolutionOrderByRelationAggregateInput>;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    heldItems?: Identity<PokemonEvolutionOrderByRelationAggregateInput>;
}

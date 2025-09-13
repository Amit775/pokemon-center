import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesOrderByRelationAggregateInput } from "../inputs/BerriesOrderByRelationAggregateInput";
import { EvolutionChainsOrderByRelationAggregateInput } from "../inputs/EvolutionChainsOrderByRelationAggregateInput";
import { ItemCategoriesOrderByWithRelationInput } from "../inputs/ItemCategoriesOrderByWithRelationInput";
import { ItemFlagMapOrderByRelationAggregateInput } from "../inputs/ItemFlagMapOrderByRelationAggregateInput";
import { ItemFlingEffectsOrderByWithRelationInput } from "../inputs/ItemFlingEffectsOrderByWithRelationInput";
import { ItemGameIndicesOrderByRelationAggregateInput } from "../inputs/ItemGameIndicesOrderByRelationAggregateInput";
import { MachinesOrderByRelationAggregateInput } from "../inputs/MachinesOrderByRelationAggregateInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { PokemonItemsOrderByRelationAggregateInput } from "../inputs/PokemonItemsOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemsOrderByWithRelationInput", {})
export class ItemsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cost?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  fling_power?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  fling_effect_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesOrderByWithRelationInput, {
    nullable: true
  })
  category?: ItemCategoriesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsOrderByWithRelationInput, {
    nullable: true
  })
  flingEffect?: ItemFlingEffectsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachinesOrderByRelationAggregateInput, {
    nullable: true
  })
  machines?: MachinesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerriesOrderByRelationAggregateInput, {
    nullable: true
  })
  berries?: BerriesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesOrderByRelationAggregateInput, {
    nullable: true
  })
  gameIndices?: ItemGameIndicesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapOrderByRelationAggregateInput, {
    nullable: true
  })
  flagMap?: ItemFlagMapOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsOrderByRelationAggregateInput, {
    nullable: true
  })
  babyTriggerItems?: EvolutionChainsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  triggerItems?: PokemonEvolutionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  heldItems?: PokemonEvolutionOrderByRelationAggregateInput | undefined;
}

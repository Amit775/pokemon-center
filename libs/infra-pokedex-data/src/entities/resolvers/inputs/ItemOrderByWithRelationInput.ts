import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryOrderByRelationAggregateInput } from "../inputs/BerryOrderByRelationAggregateInput";
import { EvolutionChainOrderByRelationAggregateInput } from "../inputs/EvolutionChainOrderByRelationAggregateInput";
import { ItemCategoryOrderByWithRelationInput } from "../inputs/ItemCategoryOrderByWithRelationInput";
import { ItemFlagMapOrderByRelationAggregateInput } from "../inputs/ItemFlagMapOrderByRelationAggregateInput";
import { ItemFlingEffectOrderByWithRelationInput } from "../inputs/ItemFlingEffectOrderByWithRelationInput";
import { ItemGameIndexOrderByRelationAggregateInput } from "../inputs/ItemGameIndexOrderByRelationAggregateInput";
import { MachineOrderByRelationAggregateInput } from "../inputs/MachineOrderByRelationAggregateInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { PokemonItemOrderByRelationAggregateInput } from "../inputs/PokemonItemOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemOrderByWithRelationInput", {})
export class ItemOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ItemCategoryOrderByWithRelationInput, {
    nullable: true
  })
  category?: ItemCategoryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectOrderByWithRelationInput, {
    nullable: true
  })
  flingEffect?: ItemFlingEffectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachineOrderByRelationAggregateInput, {
    nullable: true
  })
  machines?: MachineOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryOrderByRelationAggregateInput, {
    nullable: true
  })
  berries?: BerryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexOrderByRelationAggregateInput, {
    nullable: true
  })
  gameIndices?: ItemGameIndexOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapOrderByRelationAggregateInput, {
    nullable: true
  })
  flagMap?: ItemFlagMapOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainOrderByRelationAggregateInput, {
    nullable: true
  })
  babyTriggerItems?: EvolutionChainOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  triggerItems?: PokemonEvolutionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  heldItems?: PokemonEvolutionOrderByRelationAggregateInput | undefined;
}

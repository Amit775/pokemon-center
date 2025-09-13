import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsOrderByWithRelationInput } from "../inputs/ItemsOrderByWithRelationInput";
import { PokemonSpeciesOrderByRelationAggregateInput } from "../inputs/PokemonSpeciesOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EvolutionChainsOrderByWithRelationInput", {})
export class EvolutionChainsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  baby_trigger_item_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ItemsOrderByWithRelationInput, {
    nullable: true
  })
  babyTriggerItem?: ItemsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByRelationAggregateInput, {
    nullable: true
  })
  species?: PokemonSpeciesOrderByRelationAggregateInput | undefined;
}

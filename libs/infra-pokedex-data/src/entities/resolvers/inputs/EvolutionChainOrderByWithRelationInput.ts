import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemOrderByWithRelationInput } from "../inputs/ItemOrderByWithRelationInput";
import { PokemonSpeciesOrderByRelationAggregateInput } from "../inputs/PokemonSpeciesOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EvolutionChainOrderByWithRelationInput", {})
export class EvolutionChainOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  baby_trigger_item_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ItemOrderByWithRelationInput, {
    nullable: true
  })
  babyTriggerItem?: ItemOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByRelationAggregateInput, {
    nullable: true
  })
  species?: PokemonSpeciesOrderByRelationAggregateInput | undefined;
}

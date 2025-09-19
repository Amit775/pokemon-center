import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemAvgOrderByAggregateInput } from "../inputs/PokemonItemAvgOrderByAggregateInput";
import { PokemonItemCountOrderByAggregateInput } from "../inputs/PokemonItemCountOrderByAggregateInput";
import { PokemonItemMaxOrderByAggregateInput } from "../inputs/PokemonItemMaxOrderByAggregateInput";
import { PokemonItemMinOrderByAggregateInput } from "../inputs/PokemonItemMinOrderByAggregateInput";
import { PokemonItemSumOrderByAggregateInput } from "../inputs/PokemonItemSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonItemOrderByWithAggregationInput", {})
export class PokemonItemOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rarity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonItemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonItemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonItemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonItemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonItemSumOrderByAggregateInput | undefined;
}

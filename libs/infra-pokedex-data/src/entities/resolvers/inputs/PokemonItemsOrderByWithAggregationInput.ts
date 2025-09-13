import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsAvgOrderByAggregateInput } from "../inputs/PokemonItemsAvgOrderByAggregateInput";
import { PokemonItemsCountOrderByAggregateInput } from "../inputs/PokemonItemsCountOrderByAggregateInput";
import { PokemonItemsMaxOrderByAggregateInput } from "../inputs/PokemonItemsMaxOrderByAggregateInput";
import { PokemonItemsMinOrderByAggregateInput } from "../inputs/PokemonItemsMinOrderByAggregateInput";
import { PokemonItemsSumOrderByAggregateInput } from "../inputs/PokemonItemsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonItemsOrderByWithAggregationInput", {})
export class PokemonItemsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokemonItemsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonItemsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonItemsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonItemsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonItemsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonItemsSumOrderByAggregateInput | undefined;
}

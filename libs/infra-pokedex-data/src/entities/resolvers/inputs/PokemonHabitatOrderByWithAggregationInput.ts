import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatAvgOrderByAggregateInput } from "../inputs/PokemonHabitatAvgOrderByAggregateInput";
import { PokemonHabitatCountOrderByAggregateInput } from "../inputs/PokemonHabitatCountOrderByAggregateInput";
import { PokemonHabitatMaxOrderByAggregateInput } from "../inputs/PokemonHabitatMaxOrderByAggregateInput";
import { PokemonHabitatMinOrderByAggregateInput } from "../inputs/PokemonHabitatMinOrderByAggregateInput";
import { PokemonHabitatSumOrderByAggregateInput } from "../inputs/PokemonHabitatSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonHabitatOrderByWithAggregationInput", {})
export class PokemonHabitatOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonHabitatCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonHabitatAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonHabitatMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonHabitatMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonHabitatSumOrderByAggregateInput | undefined;
}

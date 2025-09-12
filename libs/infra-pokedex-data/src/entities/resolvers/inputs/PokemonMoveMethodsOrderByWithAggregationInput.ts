import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsAvgOrderByAggregateInput } from "../inputs/PokemonMoveMethodsAvgOrderByAggregateInput";
import { PokemonMoveMethodsCountOrderByAggregateInput } from "../inputs/PokemonMoveMethodsCountOrderByAggregateInput";
import { PokemonMoveMethodsMaxOrderByAggregateInput } from "../inputs/PokemonMoveMethodsMaxOrderByAggregateInput";
import { PokemonMoveMethodsMinOrderByAggregateInput } from "../inputs/PokemonMoveMethodsMinOrderByAggregateInput";
import { PokemonMoveMethodsSumOrderByAggregateInput } from "../inputs/PokemonMoveMethodsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonMoveMethodsOrderByWithAggregationInput", {})
export class PokemonMoveMethodsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonMoveMethodsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonMoveMethodsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonMoveMethodsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonMoveMethodsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonMoveMethodsSumOrderByAggregateInput | undefined;
}

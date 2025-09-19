import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodAvgOrderByAggregateInput } from "../inputs/PokemonMoveMethodAvgOrderByAggregateInput";
import { PokemonMoveMethodCountOrderByAggregateInput } from "../inputs/PokemonMoveMethodCountOrderByAggregateInput";
import { PokemonMoveMethodMaxOrderByAggregateInput } from "../inputs/PokemonMoveMethodMaxOrderByAggregateInput";
import { PokemonMoveMethodMinOrderByAggregateInput } from "../inputs/PokemonMoveMethodMinOrderByAggregateInput";
import { PokemonMoveMethodSumOrderByAggregateInput } from "../inputs/PokemonMoveMethodSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonMoveMethodOrderByWithAggregationInput", {})
export class PokemonMoveMethodOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonMoveMethodCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonMoveMethodAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonMoveMethodMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonMoveMethodMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonMoveMethodSumOrderByAggregateInput | undefined;
}

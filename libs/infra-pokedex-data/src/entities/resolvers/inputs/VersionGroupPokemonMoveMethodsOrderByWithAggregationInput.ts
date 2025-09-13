import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsAvgOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodsAvgOrderByAggregateInput";
import { VersionGroupPokemonMoveMethodsCountOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodsCountOrderByAggregateInput";
import { VersionGroupPokemonMoveMethodsMaxOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodsMaxOrderByAggregateInput";
import { VersionGroupPokemonMoveMethodsMinOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodsMinOrderByAggregateInput";
import { VersionGroupPokemonMoveMethodsSumOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsOrderByWithAggregationInput", {})
export class VersionGroupPokemonMoveMethodsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_move_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VersionGroupPokemonMoveMethodsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VersionGroupPokemonMoveMethodsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VersionGroupPokemonMoveMethodsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VersionGroupPokemonMoveMethodsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VersionGroupPokemonMoveMethodsSumOrderByAggregateInput | undefined;
}

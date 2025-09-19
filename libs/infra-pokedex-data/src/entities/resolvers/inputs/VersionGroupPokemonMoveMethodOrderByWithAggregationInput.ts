import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodAvgOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodAvgOrderByAggregateInput";
import { VersionGroupPokemonMoveMethodCountOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodCountOrderByAggregateInput";
import { VersionGroupPokemonMoveMethodMaxOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodMaxOrderByAggregateInput";
import { VersionGroupPokemonMoveMethodMinOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodMinOrderByAggregateInput";
import { VersionGroupPokemonMoveMethodSumOrderByAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodOrderByWithAggregationInput", {})
export class VersionGroupPokemonMoveMethodOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_move_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VersionGroupPokemonMoveMethodCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VersionGroupPokemonMoveMethodAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VersionGroupPokemonMoveMethodMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VersionGroupPokemonMoveMethodMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VersionGroupPokemonMoveMethodSumOrderByAggregateInput | undefined;
}

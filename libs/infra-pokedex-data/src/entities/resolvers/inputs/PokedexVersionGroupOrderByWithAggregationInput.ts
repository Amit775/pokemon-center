import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupAvgOrderByAggregateInput } from "../inputs/PokedexVersionGroupAvgOrderByAggregateInput";
import { PokedexVersionGroupCountOrderByAggregateInput } from "../inputs/PokedexVersionGroupCountOrderByAggregateInput";
import { PokedexVersionGroupMaxOrderByAggregateInput } from "../inputs/PokedexVersionGroupMaxOrderByAggregateInput";
import { PokedexVersionGroupMinOrderByAggregateInput } from "../inputs/PokedexVersionGroupMinOrderByAggregateInput";
import { PokedexVersionGroupSumOrderByAggregateInput } from "../inputs/PokedexVersionGroupSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokedexVersionGroupOrderByWithAggregationInput", {})
export class PokedexVersionGroupOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokedex_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokedexVersionGroupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokedexVersionGroupAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokedexVersionGroupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokedexVersionGroupMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokedexVersionGroupSumOrderByAggregateInput | undefined;
}

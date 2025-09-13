import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsAvgOrderByAggregateInput } from "../inputs/PokedexVersionGroupsAvgOrderByAggregateInput";
import { PokedexVersionGroupsCountOrderByAggregateInput } from "../inputs/PokedexVersionGroupsCountOrderByAggregateInput";
import { PokedexVersionGroupsMaxOrderByAggregateInput } from "../inputs/PokedexVersionGroupsMaxOrderByAggregateInput";
import { PokedexVersionGroupsMinOrderByAggregateInput } from "../inputs/PokedexVersionGroupsMinOrderByAggregateInput";
import { PokedexVersionGroupsSumOrderByAggregateInput } from "../inputs/PokedexVersionGroupsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokedexVersionGroupsOrderByWithAggregationInput", {})
export class PokedexVersionGroupsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokedex_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokedexVersionGroupsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokedexVersionGroupsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokedexVersionGroupsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokedexVersionGroupsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokedexVersionGroupsSumOrderByAggregateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsAvgOrderByAggregateInput } from "../inputs/PokemonEggGroupsAvgOrderByAggregateInput";
import { PokemonEggGroupsCountOrderByAggregateInput } from "../inputs/PokemonEggGroupsCountOrderByAggregateInput";
import { PokemonEggGroupsMaxOrderByAggregateInput } from "../inputs/PokemonEggGroupsMaxOrderByAggregateInput";
import { PokemonEggGroupsMinOrderByAggregateInput } from "../inputs/PokemonEggGroupsMinOrderByAggregateInput";
import { PokemonEggGroupsSumOrderByAggregateInput } from "../inputs/PokemonEggGroupsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonEggGroupsOrderByWithAggregationInput", {})
export class PokemonEggGroupsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  species_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  egg_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonEggGroupsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonEggGroupsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonEggGroupsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonEggGroupsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonEggGroupsSumOrderByAggregateInput | undefined;
}

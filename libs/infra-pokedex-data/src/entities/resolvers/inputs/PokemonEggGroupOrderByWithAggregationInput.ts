import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupAvgOrderByAggregateInput } from "../inputs/PokemonEggGroupAvgOrderByAggregateInput";
import { PokemonEggGroupCountOrderByAggregateInput } from "../inputs/PokemonEggGroupCountOrderByAggregateInput";
import { PokemonEggGroupMaxOrderByAggregateInput } from "../inputs/PokemonEggGroupMaxOrderByAggregateInput";
import { PokemonEggGroupMinOrderByAggregateInput } from "../inputs/PokemonEggGroupMinOrderByAggregateInput";
import { PokemonEggGroupSumOrderByAggregateInput } from "../inputs/PokemonEggGroupSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonEggGroupOrderByWithAggregationInput", {})
export class PokemonEggGroupOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  species_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  egg_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonEggGroupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonEggGroupAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonEggGroupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonEggGroupMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonEggGroupSumOrderByAggregateInput | undefined;
}

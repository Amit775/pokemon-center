import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorAvgOrderByAggregateInput } from "../inputs/PokemonColorAvgOrderByAggregateInput";
import { PokemonColorCountOrderByAggregateInput } from "../inputs/PokemonColorCountOrderByAggregateInput";
import { PokemonColorMaxOrderByAggregateInput } from "../inputs/PokemonColorMaxOrderByAggregateInput";
import { PokemonColorMinOrderByAggregateInput } from "../inputs/PokemonColorMinOrderByAggregateInput";
import { PokemonColorSumOrderByAggregateInput } from "../inputs/PokemonColorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonColorOrderByWithAggregationInput", {})
export class PokemonColorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonColorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonColorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonColorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonColorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonColorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonColorSumOrderByAggregateInput | undefined;
}

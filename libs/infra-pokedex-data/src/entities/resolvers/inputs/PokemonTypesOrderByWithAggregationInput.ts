import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesAvgOrderByAggregateInput } from "../inputs/PokemonTypesAvgOrderByAggregateInput";
import { PokemonTypesCountOrderByAggregateInput } from "../inputs/PokemonTypesCountOrderByAggregateInput";
import { PokemonTypesMaxOrderByAggregateInput } from "../inputs/PokemonTypesMaxOrderByAggregateInput";
import { PokemonTypesMinOrderByAggregateInput } from "../inputs/PokemonTypesMinOrderByAggregateInput";
import { PokemonTypesSumOrderByAggregateInput } from "../inputs/PokemonTypesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonTypesOrderByWithAggregationInput", {})
export class PokemonTypesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slot?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonTypesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonTypesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonTypesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonTypesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonTypesSumOrderByAggregateInput | undefined;
}

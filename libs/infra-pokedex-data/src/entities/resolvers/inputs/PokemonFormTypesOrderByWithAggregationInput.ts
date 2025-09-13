import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesAvgOrderByAggregateInput } from "../inputs/PokemonFormTypesAvgOrderByAggregateInput";
import { PokemonFormTypesCountOrderByAggregateInput } from "../inputs/PokemonFormTypesCountOrderByAggregateInput";
import { PokemonFormTypesMaxOrderByAggregateInput } from "../inputs/PokemonFormTypesMaxOrderByAggregateInput";
import { PokemonFormTypesMinOrderByAggregateInput } from "../inputs/PokemonFormTypesMinOrderByAggregateInput";
import { PokemonFormTypesSumOrderByAggregateInput } from "../inputs/PokemonFormTypesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormTypesOrderByWithAggregationInput", {})
export class PokemonFormTypesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_form_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slot?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonFormTypesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonFormTypesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonFormTypesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonFormTypesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonFormTypesSumOrderByAggregateInput | undefined;
}

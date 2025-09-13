import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumbersAvgOrderByAggregateInput } from "../inputs/PokemonDexNumbersAvgOrderByAggregateInput";
import { PokemonDexNumbersCountOrderByAggregateInput } from "../inputs/PokemonDexNumbersCountOrderByAggregateInput";
import { PokemonDexNumbersMaxOrderByAggregateInput } from "../inputs/PokemonDexNumbersMaxOrderByAggregateInput";
import { PokemonDexNumbersMinOrderByAggregateInput } from "../inputs/PokemonDexNumbersMinOrderByAggregateInput";
import { PokemonDexNumbersSumOrderByAggregateInput } from "../inputs/PokemonDexNumbersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonDexNumbersOrderByWithAggregationInput", {})
export class PokemonDexNumbersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  species_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokedex_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokedex_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonDexNumbersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonDexNumbersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonDexNumbersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonDexNumbersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonDexNumbersSumOrderByAggregateInput | undefined;
}

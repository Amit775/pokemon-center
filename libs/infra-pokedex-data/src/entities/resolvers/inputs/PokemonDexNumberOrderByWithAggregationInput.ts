import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonDexNumberAvgOrderByAggregateInput } from "../inputs/PokemonDexNumberAvgOrderByAggregateInput";
import { PokemonDexNumberCountOrderByAggregateInput } from "../inputs/PokemonDexNumberCountOrderByAggregateInput";
import { PokemonDexNumberMaxOrderByAggregateInput } from "../inputs/PokemonDexNumberMaxOrderByAggregateInput";
import { PokemonDexNumberMinOrderByAggregateInput } from "../inputs/PokemonDexNumberMinOrderByAggregateInput";
import { PokemonDexNumberSumOrderByAggregateInput } from "../inputs/PokemonDexNumberSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonDexNumberOrderByWithAggregationInput", {})
export class PokemonDexNumberOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokemonDexNumberCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonDexNumberCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonDexNumberAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonDexNumberMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonDexNumberMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonDexNumberSumOrderByAggregateInput | undefined;
}

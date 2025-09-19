import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationAvgOrderByAggregateInput } from "../inputs/PokemonFormGenerationAvgOrderByAggregateInput";
import { PokemonFormGenerationCountOrderByAggregateInput } from "../inputs/PokemonFormGenerationCountOrderByAggregateInput";
import { PokemonFormGenerationMaxOrderByAggregateInput } from "../inputs/PokemonFormGenerationMaxOrderByAggregateInput";
import { PokemonFormGenerationMinOrderByAggregateInput } from "../inputs/PokemonFormGenerationMinOrderByAggregateInput";
import { PokemonFormGenerationSumOrderByAggregateInput } from "../inputs/PokemonFormGenerationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormGenerationOrderByWithAggregationInput", {})
export class PokemonFormGenerationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_form_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonFormGenerationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonFormGenerationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonFormGenerationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonFormGenerationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonFormGenerationSumOrderByAggregateInput | undefined;
}

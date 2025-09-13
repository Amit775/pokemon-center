import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsAvgOrderByAggregateInput } from "../inputs/PokemonFormGenerationsAvgOrderByAggregateInput";
import { PokemonFormGenerationsCountOrderByAggregateInput } from "../inputs/PokemonFormGenerationsCountOrderByAggregateInput";
import { PokemonFormGenerationsMaxOrderByAggregateInput } from "../inputs/PokemonFormGenerationsMaxOrderByAggregateInput";
import { PokemonFormGenerationsMinOrderByAggregateInput } from "../inputs/PokemonFormGenerationsMinOrderByAggregateInput";
import { PokemonFormGenerationsSumOrderByAggregateInput } from "../inputs/PokemonFormGenerationsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormGenerationsOrderByWithAggregationInput", {})
export class PokemonFormGenerationsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonFormGenerationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonFormGenerationsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonFormGenerationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonFormGenerationsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonFormGenerationsSumOrderByAggregateInput | undefined;
}

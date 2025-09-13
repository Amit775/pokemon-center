import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatsAvgOrderByAggregateInput } from "../inputs/PokemonHabitatsAvgOrderByAggregateInput";
import { PokemonHabitatsCountOrderByAggregateInput } from "../inputs/PokemonHabitatsCountOrderByAggregateInput";
import { PokemonHabitatsMaxOrderByAggregateInput } from "../inputs/PokemonHabitatsMaxOrderByAggregateInput";
import { PokemonHabitatsMinOrderByAggregateInput } from "../inputs/PokemonHabitatsMinOrderByAggregateInput";
import { PokemonHabitatsSumOrderByAggregateInput } from "../inputs/PokemonHabitatsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonHabitatsOrderByWithAggregationInput", {})
export class PokemonHabitatsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonHabitatsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonHabitatsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonHabitatsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonHabitatsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonHabitatsSumOrderByAggregateInput | undefined;
}

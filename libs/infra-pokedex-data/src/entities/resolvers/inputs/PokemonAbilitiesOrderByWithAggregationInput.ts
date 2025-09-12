import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesAvgOrderByAggregateInput } from "../inputs/PokemonAbilitiesAvgOrderByAggregateInput";
import { PokemonAbilitiesCountOrderByAggregateInput } from "../inputs/PokemonAbilitiesCountOrderByAggregateInput";
import { PokemonAbilitiesMaxOrderByAggregateInput } from "../inputs/PokemonAbilitiesMaxOrderByAggregateInput";
import { PokemonAbilitiesMinOrderByAggregateInput } from "../inputs/PokemonAbilitiesMinOrderByAggregateInput";
import { PokemonAbilitiesSumOrderByAggregateInput } from "../inputs/PokemonAbilitiesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonAbilitiesOrderByWithAggregationInput", {})
export class PokemonAbilitiesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ability_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_hidden?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slot?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonAbilitiesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonAbilitiesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonAbilitiesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonAbilitiesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonAbilitiesSumOrderByAggregateInput | undefined;
}

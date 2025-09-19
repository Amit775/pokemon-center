import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityAvgOrderByAggregateInput } from "../inputs/PokemonAbilityAvgOrderByAggregateInput";
import { PokemonAbilityCountOrderByAggregateInput } from "../inputs/PokemonAbilityCountOrderByAggregateInput";
import { PokemonAbilityMaxOrderByAggregateInput } from "../inputs/PokemonAbilityMaxOrderByAggregateInput";
import { PokemonAbilityMinOrderByAggregateInput } from "../inputs/PokemonAbilityMinOrderByAggregateInput";
import { PokemonAbilitySumOrderByAggregateInput } from "../inputs/PokemonAbilitySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonAbilityOrderByWithAggregationInput", {})
export class PokemonAbilityOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokemonAbilityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonAbilityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonAbilityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonAbilityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonAbilityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonAbilitySumOrderByAggregateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsOrderByWithRelationInput } from "../inputs/GenerationsOrderByWithRelationInput";
import { PokemonAbilitiesOrderByRelationAggregateInput } from "../inputs/PokemonAbilitiesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AbilitiesOrderByWithRelationInput", {})
export class AbilitiesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_main_series?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GenerationsOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonAbilities?: PokemonAbilitiesOrderByRelationAggregateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityOrderByWithRelationInput } from "../inputs/AbilityOrderByWithRelationInput";
import { PokemonOrderByWithRelationInput } from "../inputs/PokemonOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonAbilityOrderByWithRelationInput", {})
export class PokemonAbilityOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => PokemonOrderByWithRelationInput, {
    nullable: true
  })
  pokemon?: PokemonOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => AbilityOrderByWithRelationInput, {
    nullable: true
  })
  ability?: AbilityOrderByWithRelationInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesOrderByWithRelationInput } from "../inputs/MovesOrderByWithRelationInput";
import { PokemonMoveMethodsOrderByWithRelationInput } from "../inputs/PokemonMoveMethodsOrderByWithRelationInput";
import { PokemonOrderByWithRelationInput } from "../inputs/PokemonOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { VersionGroupsOrderByWithRelationInput } from "../inputs/VersionGroupsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonMovesOrderByWithRelationInput", {})
export class PokemonMovesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_move_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  level?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  mastery?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => PokemonOrderByWithRelationInput, {
    nullable: true
  })
  pokemon?: PokemonOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MovesOrderByWithRelationInput, {
    nullable: true
  })
  move?: MovesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsOrderByWithRelationInput, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodsOrderByWithRelationInput | undefined;
}

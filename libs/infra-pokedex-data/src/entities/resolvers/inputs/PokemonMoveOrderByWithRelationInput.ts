import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveOrderByWithRelationInput } from "../inputs/MoveOrderByWithRelationInput";
import { PokemonMoveMethodOrderByWithRelationInput } from "../inputs/PokemonMoveMethodOrderByWithRelationInput";
import { PokemonOrderByWithRelationInput } from "../inputs/PokemonOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { VersionGroupOrderByWithRelationInput } from "../inputs/VersionGroupOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonMoveOrderByWithRelationInput", {})
export class PokemonMoveOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => VersionGroupOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveOrderByWithRelationInput, {
    nullable: true
  })
  move?: MoveOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodOrderByWithRelationInput, {
    nullable: true
  })
  moveMethod?: PokemonMoveMethodOrderByWithRelationInput | undefined;
}

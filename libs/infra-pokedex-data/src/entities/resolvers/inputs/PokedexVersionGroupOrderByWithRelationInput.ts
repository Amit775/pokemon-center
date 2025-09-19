import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexOrderByWithRelationInput } from "../inputs/PokedexOrderByWithRelationInput";
import { VersionGroupOrderByWithRelationInput } from "../inputs/VersionGroupOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokedexVersionGroupOrderByWithRelationInput", {})
export class PokedexVersionGroupOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokedex_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokedexOrderByWithRelationInput, {
    nullable: true
  })
  pokedex?: PokedexOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupOrderByWithRelationInput | undefined;
}

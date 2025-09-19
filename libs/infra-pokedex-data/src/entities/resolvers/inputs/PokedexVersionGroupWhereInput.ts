import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokedexRelationFilter } from "../inputs/PokedexRelationFilter";
import { VersionGroupRelationFilter } from "../inputs/VersionGroupRelationFilter";

@TypeGraphQL.InputType("PokedexVersionGroupWhereInput", {})
export class PokedexVersionGroupWhereInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupWhereInput], {
    nullable: true
  })
  AND?: PokedexVersionGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupWhereInput], {
    nullable: true
  })
  OR?: PokedexVersionGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupWhereInput], {
    nullable: true
  })
  NOT?: PokedexVersionGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokedex_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokedexRelationFilter, {
    nullable: true
  })
  pokedex?: PokedexRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupRelationFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokedexRelationFilter } from "../inputs/PokedexRelationFilter";
import { PokedexVersionGroupWhereInput } from "../inputs/PokedexVersionGroupWhereInput";
import { VersionGroupRelationFilter } from "../inputs/VersionGroupRelationFilter";

@TypeGraphQL.InputType("PokedexVersionGroupWhereUniqueInput", {})
export class PokedexVersionGroupWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokedex_id?: number | undefined;

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

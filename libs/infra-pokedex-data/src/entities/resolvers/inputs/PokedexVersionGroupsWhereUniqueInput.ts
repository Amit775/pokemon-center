import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokedexVersionGroupsWhereInput } from "../inputs/PokedexVersionGroupsWhereInput";
import { PokedexesRelationFilter } from "../inputs/PokedexesRelationFilter";
import { VersionGroupsRelationFilter } from "../inputs/VersionGroupsRelationFilter";

@TypeGraphQL.InputType("PokedexVersionGroupsWhereUniqueInput", {})
export class PokedexVersionGroupsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokedex_id?: number | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsWhereInput], {
    nullable: true
  })
  AND?: PokedexVersionGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsWhereInput], {
    nullable: true
  })
  OR?: PokedexVersionGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsWhereInput], {
    nullable: true
  })
  NOT?: PokedexVersionGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokedexesRelationFilter, {
    nullable: true
  })
  pokedex?: PokedexesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupsRelationFilter | undefined;
}

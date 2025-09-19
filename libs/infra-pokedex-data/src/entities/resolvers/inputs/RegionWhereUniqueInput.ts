import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationListRelationFilter } from "../inputs/GenerationListRelationFilter";
import { LocationListRelationFilter } from "../inputs/LocationListRelationFilter";
import { PokedexListRelationFilter } from "../inputs/PokedexListRelationFilter";
import { RegionWhereInput } from "../inputs/RegionWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupRegionListRelationFilter } from "../inputs/VersionGroupRegionListRelationFilter";

@TypeGraphQL.InputType("RegionWhereUniqueInput", {})
export class RegionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereInput], {
    nullable: true
  })
  AND?: RegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereInput], {
    nullable: true
  })
  OR?: RegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereInput], {
    nullable: true
  })
  NOT?: RegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationListRelationFilter, {
    nullable: true
  })
  generations?: GenerationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationListRelationFilter, {
    nullable: true
  })
  locations?: LocationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokedexListRelationFilter, {
    nullable: true
  })
  pokedexes?: PokedexListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionListRelationFilter, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionListRelationFilter | undefined;
}

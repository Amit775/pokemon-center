import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsListRelationFilter } from "../inputs/GenerationsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationsListRelationFilter } from "../inputs/LocationsListRelationFilter";
import { PokedexesListRelationFilter } from "../inputs/PokedexesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupRegionsListRelationFilter } from "../inputs/VersionGroupRegionsListRelationFilter";

@TypeGraphQL.InputType("RegionsWhereInput", {})
export class RegionsWhereInput {
  @TypeGraphQL.Field(_type => [RegionsWhereInput], {
    nullable: true
  })
  AND?: RegionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionsWhereInput], {
    nullable: true
  })
  OR?: RegionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionsWhereInput], {
    nullable: true
  })
  NOT?: RegionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationsListRelationFilter, {
    nullable: true
  })
  generations?: GenerationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationsListRelationFilter, {
    nullable: true
  })
  locations?: LocationsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokedexesListRelationFilter, {
    nullable: true
  })
  pokedexes?: PokedexesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsListRelationFilter, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionsListRelationFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersListRelationFilter } from "../inputs/EncountersListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRatesListRelationFilter } from "../inputs/LocationAreaEncounterRatesListRelationFilter";
import { PokemonGameIndicesListRelationFilter } from "../inputs/PokemonGameIndicesListRelationFilter";
import { PokemonItemsListRelationFilter } from "../inputs/PokemonItemsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupsRelationFilter } from "../inputs/VersionGroupsRelationFilter";

@TypeGraphQL.InputType("VersionsWhereInput", {})
export class VersionsWhereInput {
  @TypeGraphQL.Field(_type => [VersionsWhereInput], {
    nullable: true
  })
  AND?: VersionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsWhereInput], {
    nullable: true
  })
  OR?: VersionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsWhereInput], {
    nullable: true
  })
  NOT?: VersionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncountersListRelationFilter, {
    nullable: true
  })
  encounters?: EncountersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsListRelationFilter, {
    nullable: true
  })
  pokemonItems?: PokemonItemsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesListRelationFilter, {
    nullable: true
  })
  pokemonGameIndices?: PokemonGameIndicesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesListRelationFilter, {
    nullable: true
  })
  locationAreaEncounterRates?: LocationAreaEncounterRatesListRelationFilter | undefined;
}

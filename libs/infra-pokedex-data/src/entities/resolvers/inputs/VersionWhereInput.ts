import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterListRelationFilter } from "../inputs/EncounterListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRateListRelationFilter } from "../inputs/LocationAreaEncounterRateListRelationFilter";
import { PokemonGameIndexListRelationFilter } from "../inputs/PokemonGameIndexListRelationFilter";
import { PokemonItemListRelationFilter } from "../inputs/PokemonItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VersionGroupRelationFilter } from "../inputs/VersionGroupRelationFilter";

@TypeGraphQL.InputType("VersionWhereInput", {})
export class VersionWhereInput {
  @TypeGraphQL.Field(_type => [VersionWhereInput], {
    nullable: true
  })
  AND?: VersionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionWhereInput], {
    nullable: true
  })
  OR?: VersionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionWhereInput], {
    nullable: true
  })
  NOT?: VersionWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => VersionGroupRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterListRelationFilter, {
    nullable: true
  })
  encounters?: EncounterListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonItemListRelationFilter, {
    nullable: true
  })
  pokemonItems?: PokemonItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexListRelationFilter, {
    nullable: true
  })
  pokemonGameIndices?: PokemonGameIndexListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateListRelationFilter, {
    nullable: true
  })
  locationAreaEncounterRates?: LocationAreaEncounterRateListRelationFilter | undefined;
}

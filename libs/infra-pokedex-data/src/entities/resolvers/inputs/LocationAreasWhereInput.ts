import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersListRelationFilter } from "../inputs/EncountersListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRatesListRelationFilter } from "../inputs/LocationAreaEncounterRatesListRelationFilter";
import { LocationsRelationFilter } from "../inputs/LocationsRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("LocationAreasWhereInput", {})
export class LocationAreasWhereInput {
  @TypeGraphQL.Field(_type => [LocationAreasWhereInput], {
    nullable: true
  })
  AND?: LocationAreasWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasWhereInput], {
    nullable: true
  })
  OR?: LocationAreasWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasWhereInput], {
    nullable: true
  })
  NOT?: LocationAreasWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  location_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  identifier?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => LocationsRelationFilter, {
    nullable: true
  })
  location?: LocationsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncountersListRelationFilter, {
    nullable: true
  })
  encounters?: EncountersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesListRelationFilter, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRatesListRelationFilter | undefined;
}

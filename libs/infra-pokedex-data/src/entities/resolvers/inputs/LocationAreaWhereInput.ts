import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterListRelationFilter } from "../inputs/EncounterListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRateListRelationFilter } from "../inputs/LocationAreaEncounterRateListRelationFilter";
import { LocationRelationFilter } from "../inputs/LocationRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("LocationAreaWhereInput", {})
export class LocationAreaWhereInput {
  @TypeGraphQL.Field(_type => [LocationAreaWhereInput], {
    nullable: true
  })
  AND?: LocationAreaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaWhereInput], {
    nullable: true
  })
  OR?: LocationAreaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaWhereInput], {
    nullable: true
  })
  NOT?: LocationAreaWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => LocationRelationFilter, {
    nullable: true
  })
  location?: LocationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterListRelationFilter, {
    nullable: true
  })
  encounters?: EncounterListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateListRelationFilter, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRateListRelationFilter | undefined;
}

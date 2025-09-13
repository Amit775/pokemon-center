import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsListRelationFilter } from "../inputs/EncounterSlotsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRatesListRelationFilter } from "../inputs/LocationAreaEncounterRatesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterMethodsWhereInput", {})
export class EncounterMethodsWhereInput {
  @TypeGraphQL.Field(_type => [EncounterMethodsWhereInput], {
    nullable: true
  })
  AND?: EncounterMethodsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodsWhereInput], {
    nullable: true
  })
  OR?: EncounterMethodsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodsWhereInput], {
    nullable: true
  })
  NOT?: EncounterMethodsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsListRelationFilter, {
    nullable: true
  })
  slots?: EncounterSlotsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesListRelationFilter, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRatesListRelationFilter | undefined;
}

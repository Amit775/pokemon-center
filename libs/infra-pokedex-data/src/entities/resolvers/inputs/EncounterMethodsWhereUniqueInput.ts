import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsWhereInput } from "../inputs/EncounterMethodsWhereInput";
import { EncounterSlotsListRelationFilter } from "../inputs/EncounterSlotsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRatesListRelationFilter } from "../inputs/LocationAreaEncounterRatesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterMethodsWhereUniqueInput", {})
export class EncounterMethodsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

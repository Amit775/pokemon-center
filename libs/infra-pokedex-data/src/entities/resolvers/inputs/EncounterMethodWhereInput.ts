import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotListRelationFilter } from "../inputs/EncounterSlotListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRateListRelationFilter } from "../inputs/LocationAreaEncounterRateListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterMethodWhereInput", {})
export class EncounterMethodWhereInput {
  @TypeGraphQL.Field(_type => [EncounterMethodWhereInput], {
    nullable: true
  })
  AND?: EncounterMethodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodWhereInput], {
    nullable: true
  })
  OR?: EncounterMethodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodWhereInput], {
    nullable: true
  })
  NOT?: EncounterMethodWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => EncounterSlotListRelationFilter, {
    nullable: true
  })
  slots?: EncounterSlotListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateListRelationFilter, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRateListRelationFilter | undefined;
}

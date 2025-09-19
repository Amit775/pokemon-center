import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodWhereInput } from "../inputs/EncounterMethodWhereInput";
import { EncounterSlotListRelationFilter } from "../inputs/EncounterSlotListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRateListRelationFilter } from "../inputs/LocationAreaEncounterRateListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterMethodWhereUniqueInput", {})
export class EncounterMethodWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

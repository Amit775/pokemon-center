import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsWhereInput } from "../inputs/EncounterSlotsWhereInput";

@TypeGraphQL.InputType("EncounterSlotsRelationFilter", {})
export class EncounterSlotsRelationFilter {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  is?: EncounterSlotsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  isNot?: EncounterSlotsWhereInput | undefined;
}

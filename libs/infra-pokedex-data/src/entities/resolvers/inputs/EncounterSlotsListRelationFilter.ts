import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsWhereInput } from "../inputs/EncounterSlotsWhereInput";

@TypeGraphQL.InputType("EncounterSlotsListRelationFilter", {})
export class EncounterSlotsListRelationFilter {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  every?: EncounterSlotsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  some?: EncounterSlotsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  none?: EncounterSlotsWhereInput | undefined;
}

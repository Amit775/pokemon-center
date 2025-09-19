import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotWhereInput } from "../inputs/EncounterSlotWhereInput";

@TypeGraphQL.InputType("EncounterSlotRelationFilter", {})
export class EncounterSlotRelationFilter {
  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  is?: EncounterSlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  isNot?: EncounterSlotWhereInput | undefined;
}

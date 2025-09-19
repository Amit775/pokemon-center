import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotWhereInput } from "../inputs/EncounterSlotWhereInput";

@TypeGraphQL.InputType("EncounterSlotListRelationFilter", {})
export class EncounterSlotListRelationFilter {
  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  every?: EncounterSlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  some?: EncounterSlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  none?: EncounterSlotWhereInput | undefined;
}

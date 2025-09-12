import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapWhereInput } from "../inputs/EncounterConditionValueMapWhereInput";

@TypeGraphQL.InputType("EncounterConditionValueMapListRelationFilter", {})
export class EncounterConditionValueMapListRelationFilter {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereInput, {
    nullable: true
  })
  every?: EncounterConditionValueMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereInput, {
    nullable: true
  })
  some?: EncounterConditionValueMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereInput, {
    nullable: true
  })
  none?: EncounterConditionValueMapWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueWhereInput } from "../inputs/EncounterConditionValueWhereInput";

@TypeGraphQL.InputType("EncounterConditionValueListRelationFilter", {})
export class EncounterConditionValueListRelationFilter {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  every?: EncounterConditionValueWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  some?: EncounterConditionValueWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  none?: EncounterConditionValueWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsWhereInput } from "../inputs/EncounterConditionsWhereInput";

@TypeGraphQL.InputType("EncounterConditionsRelationFilter", {})
export class EncounterConditionsRelationFilter {
  @TypeGraphQL.Field(_type => EncounterConditionsWhereInput, {
    nullable: true
  })
  is?: EncounterConditionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsWhereInput, {
    nullable: true
  })
  isNot?: EncounterConditionsWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsWhereInput } from "../inputs/EncounterMethodsWhereInput";

@TypeGraphQL.InputType("EncounterMethodsRelationFilter", {})
export class EncounterMethodsRelationFilter {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  is?: EncounterMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  isNot?: EncounterMethodsWhereInput | undefined;
}

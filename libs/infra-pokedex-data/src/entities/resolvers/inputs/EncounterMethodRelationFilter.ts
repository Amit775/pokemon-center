import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodWhereInput } from "../inputs/EncounterMethodWhereInput";

@TypeGraphQL.InputType("EncounterMethodRelationFilter", {})
export class EncounterMethodRelationFilter {
  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  is?: EncounterMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  isNot?: EncounterMethodWhereInput | undefined;
}

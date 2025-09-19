import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterWhereInput } from "../inputs/EncounterWhereInput";

@TypeGraphQL.InputType("EncounterRelationFilter", {})
export class EncounterRelationFilter {
  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  is?: EncounterWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  isNot?: EncounterWhereInput | undefined;
}

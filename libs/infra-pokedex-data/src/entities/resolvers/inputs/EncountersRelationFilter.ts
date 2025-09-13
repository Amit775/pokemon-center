import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersWhereInput } from "../inputs/EncountersWhereInput";

@TypeGraphQL.InputType("EncountersRelationFilter", {})
export class EncountersRelationFilter {
  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  is?: EncountersWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  isNot?: EncountersWhereInput | undefined;
}

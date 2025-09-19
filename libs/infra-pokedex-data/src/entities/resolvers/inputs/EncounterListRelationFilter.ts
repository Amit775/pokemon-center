import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterWhereInput } from "../inputs/EncounterWhereInput";

@TypeGraphQL.InputType("EncounterListRelationFilter", {})
export class EncounterListRelationFilter {
  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  every?: EncounterWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  some?: EncounterWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  none?: EncounterWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersWhereInput } from "../inputs/EncountersWhereInput";

@TypeGraphQL.InputType("EncountersListRelationFilter", {})
export class EncountersListRelationFilter {
  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  every?: EncountersWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  some?: EncountersWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  none?: EncountersWhereInput | undefined;
}

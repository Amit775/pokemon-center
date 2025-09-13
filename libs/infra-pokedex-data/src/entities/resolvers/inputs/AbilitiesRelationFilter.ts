import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesWhereInput } from "../inputs/AbilitiesWhereInput";

@TypeGraphQL.InputType("AbilitiesRelationFilter", {})
export class AbilitiesRelationFilter {
  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  is?: AbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  isNot?: AbilitiesWhereInput | undefined;
}

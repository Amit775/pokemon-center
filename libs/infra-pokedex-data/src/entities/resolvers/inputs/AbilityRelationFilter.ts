import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityWhereInput } from "../inputs/AbilityWhereInput";

@TypeGraphQL.InputType("AbilityRelationFilter", {})
export class AbilityRelationFilter {
  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  is?: AbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  isNot?: AbilityWhereInput | undefined;
}

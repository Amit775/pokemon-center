import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsWhereInput } from "../inputs/MoveFlagsWhereInput";

@TypeGraphQL.InputType("MoveFlagsRelationFilter", {})
export class MoveFlagsRelationFilter {
  @TypeGraphQL.Field(_type => MoveFlagsWhereInput, {
    nullable: true
  })
  is?: MoveFlagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsWhereInput, {
    nullable: true
  })
  isNot?: MoveFlagsWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetsWhereInput } from "../inputs/MoveTargetsWhereInput";

@TypeGraphQL.InputType("MoveTargetsRelationFilter", {})
export class MoveTargetsRelationFilter {
  @TypeGraphQL.Field(_type => MoveTargetsWhereInput, {
    nullable: true
  })
  is?: MoveTargetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsWhereInput, {
    nullable: true
  })
  isNot?: MoveTargetsWhereInput | undefined;
}

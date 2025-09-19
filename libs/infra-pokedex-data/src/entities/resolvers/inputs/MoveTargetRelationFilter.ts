import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetWhereInput } from "../inputs/MoveTargetWhereInput";

@TypeGraphQL.InputType("MoveTargetRelationFilter", {})
export class MoveTargetRelationFilter {
  @TypeGraphQL.Field(_type => MoveTargetWhereInput, {
    nullable: true
  })
  is?: MoveTargetWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetWhereInput, {
    nullable: true
  })
  isNot?: MoveTargetWhereInput | undefined;
}

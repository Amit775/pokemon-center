import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateManyWithoutTargetNestedInput } from "../inputs/MoveUpdateManyWithoutTargetNestedInput";

@TypeGraphQL.InputType("MoveTargetUpdateInput", {})
export class MoveTargetUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateManyWithoutTargetNestedInput, {
    nullable: true
  })
  moves?: MoveUpdateManyWithoutTargetNestedInput | undefined;
}

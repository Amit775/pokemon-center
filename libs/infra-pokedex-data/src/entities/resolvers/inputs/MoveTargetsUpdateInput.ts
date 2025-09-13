import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateManyWithoutTargetNestedInput } from "../inputs/MovesUpdateManyWithoutTargetNestedInput";

@TypeGraphQL.InputType("MoveTargetsUpdateInput", {})
export class MoveTargetsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutTargetNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutTargetNestedInput | undefined;
}

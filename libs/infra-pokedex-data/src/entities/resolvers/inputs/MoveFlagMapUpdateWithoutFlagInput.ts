import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateWithoutFlagInput", {})
export class MoveFlagMapUpdateWithoutFlagInput {
  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  move?: MoveUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}

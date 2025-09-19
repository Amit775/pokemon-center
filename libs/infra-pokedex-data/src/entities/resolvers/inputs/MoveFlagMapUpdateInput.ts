import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput";
import { MoveUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateInput", {})
export class MoveFlagMapUpdateInput {
  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  move?: MoveUpdateOneRequiredWithoutFlagMapNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  flag?: MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}

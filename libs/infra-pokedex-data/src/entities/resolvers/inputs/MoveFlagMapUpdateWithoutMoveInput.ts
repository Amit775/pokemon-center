import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateWithoutMoveInput", {})
export class MoveFlagMapUpdateWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  flag?: MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}

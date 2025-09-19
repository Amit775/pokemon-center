import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateWithoutMoveInput", {})
export class MoveFlagMapUpdateWithoutMoveInput {
  @TypeGraphQL.Field(_type => MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  flag?: MoveFlagUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateWithoutFlagInput", {})
export class MoveFlagMapUpdateWithoutFlagInput {
  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  move?: MovesUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput";
import { MovesUpdateOneRequiredWithoutFlagMapNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutFlagMapNestedInput";

@TypeGraphQL.InputType("MoveFlagMapUpdateInput", {})
export class MoveFlagMapUpdateInput {
  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  move?: MovesUpdateOneRequiredWithoutFlagMapNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {
    nullable: true
  })
  flag?: MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput | undefined;
}

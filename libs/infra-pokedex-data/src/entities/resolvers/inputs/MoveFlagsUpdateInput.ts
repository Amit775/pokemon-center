import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MoveFlagMapUpdateManyWithoutFlagNestedInput } from "../inputs/MoveFlagMapUpdateManyWithoutFlagNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MoveFlagsUpdateInput", {})
export class MoveFlagsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapUpdateManyWithoutFlagNestedInput, {
    nullable: true
  })
  flagMap?: MoveFlagMapUpdateManyWithoutFlagNestedInput | undefined;
}

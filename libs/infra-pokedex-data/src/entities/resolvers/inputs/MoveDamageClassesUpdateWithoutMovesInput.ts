import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TypesUpdateManyWithoutDamageClassNestedInput } from "../inputs/TypesUpdateManyWithoutDamageClassNestedInput";

@TypeGraphQL.InputType("MoveDamageClassesUpdateWithoutMovesInput", {})
export class MoveDamageClassesUpdateWithoutMovesInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateManyWithoutDamageClassNestedInput, {
    nullable: true
  })
  types?: TypesUpdateManyWithoutDamageClassNestedInput | undefined;
}

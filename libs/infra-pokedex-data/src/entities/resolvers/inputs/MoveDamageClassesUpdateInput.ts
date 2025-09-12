import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovesUpdateManyWithoutDamageClassNestedInput } from "../inputs/MovesUpdateManyWithoutDamageClassNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TypesUpdateManyWithoutDamageClassNestedInput } from "../inputs/TypesUpdateManyWithoutDamageClassNestedInput";

@TypeGraphQL.InputType("MoveDamageClassesUpdateInput", {})
export class MoveDamageClassesUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutDamageClassNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutDamageClassNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateManyWithoutDamageClassNestedInput, {
    nullable: true
  })
  types?: TypesUpdateManyWithoutDamageClassNestedInput | undefined;
}

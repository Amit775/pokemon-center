import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MoveMetaUpdateManyWithoutMetaCategoryNestedInput } from "../inputs/MoveMetaUpdateManyWithoutMetaCategoryNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MoveMetaCategoriesUpdateInput", {})
export class MoveMetaCategoriesUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaUpdateManyWithoutMetaCategoryNestedInput, {
    nullable: true
  })
  meta?: MoveMetaUpdateManyWithoutMetaCategoryNestedInput | undefined;
}

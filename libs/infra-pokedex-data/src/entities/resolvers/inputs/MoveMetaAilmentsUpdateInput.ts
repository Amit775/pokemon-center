import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MoveMetaUpdateManyWithoutMetaAilmentNestedInput } from "../inputs/MoveMetaUpdateManyWithoutMetaAilmentNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MoveMetaAilmentsUpdateInput", {})
export class MoveMetaAilmentsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaUpdateManyWithoutMetaAilmentNestedInput, {
    nullable: true
  })
  meta?: MoveMetaUpdateManyWithoutMetaAilmentNestedInput | undefined;
}

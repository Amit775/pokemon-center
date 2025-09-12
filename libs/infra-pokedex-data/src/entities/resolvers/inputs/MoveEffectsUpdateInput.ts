import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovesUpdateManyWithoutEffectNestedInput } from "../inputs/MovesUpdateManyWithoutEffectNestedInput";

@TypeGraphQL.InputType("MoveEffectsUpdateInput", {})
export class MoveEffectsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutEffectNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutEffectNestedInput | undefined;
}

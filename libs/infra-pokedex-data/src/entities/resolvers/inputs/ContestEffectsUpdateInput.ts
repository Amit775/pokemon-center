import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovesUpdateManyWithoutContestEffectNestedInput } from "../inputs/MovesUpdateManyWithoutContestEffectNestedInput";

@TypeGraphQL.InputType("ContestEffectsUpdateInput", {})
export class ContestEffectsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  appeal?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  jam?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutContestEffectNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutContestEffectNestedInput | undefined;
}

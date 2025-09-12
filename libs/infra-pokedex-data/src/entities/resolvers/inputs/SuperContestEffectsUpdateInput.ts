import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovesUpdateManyWithoutSuperContestEffectNestedInput } from "../inputs/MovesUpdateManyWithoutSuperContestEffectNestedInput";

@TypeGraphQL.InputType("SuperContestEffectsUpdateInput", {})
export class SuperContestEffectsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  appeal?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutSuperContestEffectNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutSuperContestEffectNestedInput | undefined;
}

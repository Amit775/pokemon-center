import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MoveMetaAilmentsUpdateOneWithoutMetaNestedInput } from "../inputs/MoveMetaAilmentsUpdateOneWithoutMetaNestedInput";
import { MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput } from "../inputs/MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput";
import { MovesUpdateOneRequiredWithoutMetaNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutMetaNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MoveMetaUpdateWithoutStatChangesInput", {})
export class MoveMetaUpdateWithoutStatChangesInput {
  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  min_hits?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  max_hits?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  min_turns?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  max_turns?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  drain?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  healing?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  crit_rate?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  ailment_chance?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  flinch_chance?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  stat_chance?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutMetaNestedInput, {
    nullable: true
  })
  move?: MovesUpdateOneRequiredWithoutMetaNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput, {
    nullable: true
  })
  metaCategory?: MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsUpdateOneWithoutMetaNestedInput, {
    nullable: true
  })
  metaAilment?: MoveMetaAilmentsUpdateOneWithoutMetaNestedInput | undefined;
}

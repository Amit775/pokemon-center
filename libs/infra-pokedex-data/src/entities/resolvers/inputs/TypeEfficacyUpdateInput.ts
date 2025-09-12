import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TypesUpdateOneRequiredWithoutEfficacyNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutEfficacyNestedInput";
import { TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateInput", {})
export class TypeEfficacyUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  damage_factor?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutEfficacyNestedInput, {
    nullable: true
  })
  damageType?: TypesUpdateOneRequiredWithoutEfficacyNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput, {
    nullable: true
  })
  targetType?: TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput | undefined;
}

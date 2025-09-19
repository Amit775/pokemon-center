import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateOneRequiredWithoutEfficacyNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutEfficacyNestedInput";
import { TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateInput", {})
export class TypeEfficacyUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_factor?: number | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutEfficacyNestedInput, {
    nullable: true
  })
  damageType?: TypeUpdateOneRequiredWithoutEfficacyNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput, {
    nullable: true
  })
  targetType?: TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput | undefined;
}

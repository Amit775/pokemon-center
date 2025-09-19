import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateWithoutDamageTypeInput", {})
export class TypeEfficacyUpdateWithoutDamageTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_factor?: number | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput, {
    nullable: true
  })
  targetType?: TypeUpdateOneRequiredWithoutEfficacyTargetNestedInput | undefined;
}

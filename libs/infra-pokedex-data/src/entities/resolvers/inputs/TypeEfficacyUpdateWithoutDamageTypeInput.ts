import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateWithoutDamageTypeInput", {})
export class TypeEfficacyUpdateWithoutDamageTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_factor?: number | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput, {
    nullable: true
  })
  targetType?: TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput | undefined;
}

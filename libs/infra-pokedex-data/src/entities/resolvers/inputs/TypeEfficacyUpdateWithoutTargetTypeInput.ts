import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateOneRequiredWithoutEfficacyNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutEfficacyNestedInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateWithoutTargetTypeInput", {})
export class TypeEfficacyUpdateWithoutTargetTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_factor?: number | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutEfficacyNestedInput, {
    nullable: true
  })
  damageType?: TypeUpdateOneRequiredWithoutEfficacyNestedInput | undefined;
}

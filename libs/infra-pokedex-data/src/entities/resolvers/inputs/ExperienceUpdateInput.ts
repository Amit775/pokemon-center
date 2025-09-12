import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput } from "../inputs/GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExperienceUpdateInput", {})
export class ExperienceUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  level?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  experience?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput, {
    nullable: true
  })
  growthRate?: GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput | undefined;
}

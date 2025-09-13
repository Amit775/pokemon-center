import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput } from "../inputs/GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput";

@TypeGraphQL.InputType("ExperienceUpdateInput", {})
export class ExperienceUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  level?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  experience?: number | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput, {
    nullable: true
  })
  growthRate?: GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput | undefined;
}

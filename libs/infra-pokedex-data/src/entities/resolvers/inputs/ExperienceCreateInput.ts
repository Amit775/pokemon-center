import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesCreateNestedOneWithoutExperienceInput } from "../inputs/GrowthRatesCreateNestedOneWithoutExperienceInput";

@TypeGraphQL.InputType("ExperienceCreateInput", {})
export class ExperienceCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  level!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  experience!: number;

  @TypeGraphQL.Field(_type => GrowthRatesCreateNestedOneWithoutExperienceInput, {
    nullable: false
  })
  growthRate!: GrowthRatesCreateNestedOneWithoutExperienceInput;
}

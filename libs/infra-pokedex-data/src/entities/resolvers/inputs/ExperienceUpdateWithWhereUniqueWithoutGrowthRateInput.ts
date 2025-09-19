import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceUpdateWithoutGrowthRateInput } from "../inputs/ExperienceUpdateWithoutGrowthRateInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput", {})
export class ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput {
  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: false
  })
  where!: ExperienceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExperienceUpdateWithoutGrowthRateInput, {
    nullable: false
  })
  data!: ExperienceUpdateWithoutGrowthRateInput;
}

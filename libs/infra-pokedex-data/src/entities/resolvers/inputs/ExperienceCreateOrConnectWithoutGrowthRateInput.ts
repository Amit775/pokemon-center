import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateWithoutGrowthRateInput } from "../inputs/ExperienceCreateWithoutGrowthRateInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutGrowthRateInput", {})
export class ExperienceCreateOrConnectWithoutGrowthRateInput {
  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: false
  })
  where!: ExperienceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExperienceCreateWithoutGrowthRateInput, {
    nullable: false
  })
  create!: ExperienceCreateWithoutGrowthRateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceScalarWhereInput } from "../inputs/ExperienceScalarWhereInput";
import { ExperienceUpdateManyMutationInput } from "../inputs/ExperienceUpdateManyMutationInput";

@TypeGraphQL.InputType("ExperienceUpdateManyWithWhereWithoutGrowthRateInput", {})
export class ExperienceUpdateManyWithWhereWithoutGrowthRateInput {
  @TypeGraphQL.Field(_type => ExperienceScalarWhereInput, {
    nullable: false
  })
  where!: ExperienceScalarWhereInput;

  @TypeGraphQL.Field(_type => ExperienceUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExperienceUpdateManyMutationInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateManyGrowthRateInput } from "../inputs/ExperienceCreateManyGrowthRateInput";

@TypeGraphQL.InputType("ExperienceCreateManyGrowthRateInputEnvelope", {})
export class ExperienceCreateManyGrowthRateInputEnvelope {
  @TypeGraphQL.Field(_type => [ExperienceCreateManyGrowthRateInput], {
    nullable: false
  })
  data!: ExperienceCreateManyGrowthRateInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

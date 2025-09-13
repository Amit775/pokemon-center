import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateManyGrowthRateInputEnvelope } from "../inputs/ExperienceCreateManyGrowthRateInputEnvelope";
import { ExperienceCreateOrConnectWithoutGrowthRateInput } from "../inputs/ExperienceCreateOrConnectWithoutGrowthRateInput";
import { ExperienceCreateWithoutGrowthRateInput } from "../inputs/ExperienceCreateWithoutGrowthRateInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceCreateNestedManyWithoutGrowthRateInput", {})
export class ExperienceCreateNestedManyWithoutGrowthRateInput {
  @TypeGraphQL.Field(_type => [ExperienceCreateWithoutGrowthRateInput], {
    nullable: true
  })
  create?: ExperienceCreateWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceCreateOrConnectWithoutGrowthRateInput], {
    nullable: true
  })
  connectOrCreate?: ExperienceCreateOrConnectWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => ExperienceCreateManyGrowthRateInputEnvelope, {
    nullable: true
  })
  createMany?: ExperienceCreateManyGrowthRateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  connect?: ExperienceWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateManyGrowthRateInputEnvelope } from "../inputs/ExperienceCreateManyGrowthRateInputEnvelope";
import { ExperienceCreateOrConnectWithoutGrowthRateInput } from "../inputs/ExperienceCreateOrConnectWithoutGrowthRateInput";
import { ExperienceCreateWithoutGrowthRateInput } from "../inputs/ExperienceCreateWithoutGrowthRateInput";
import { ExperienceScalarWhereInput } from "../inputs/ExperienceScalarWhereInput";
import { ExperienceUpdateManyWithWhereWithoutGrowthRateInput } from "../inputs/ExperienceUpdateManyWithWhereWithoutGrowthRateInput";
import { ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput } from "../inputs/ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput";
import { ExperienceUpsertWithWhereUniqueWithoutGrowthRateInput } from "../inputs/ExperienceUpsertWithWhereUniqueWithoutGrowthRateInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceUpdateManyWithoutGrowthRateNestedInput", {})
export class ExperienceUpdateManyWithoutGrowthRateNestedInput {
  @TypeGraphQL.Field(_type => [ExperienceCreateWithoutGrowthRateInput], {
    nullable: true
  })
  create?: ExperienceCreateWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceCreateOrConnectWithoutGrowthRateInput], {
    nullable: true
  })
  connectOrCreate?: ExperienceCreateOrConnectWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceUpsertWithWhereUniqueWithoutGrowthRateInput], {
    nullable: true
  })
  upsert?: ExperienceUpsertWithWhereUniqueWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => ExperienceCreateManyGrowthRateInputEnvelope, {
    nullable: true
  })
  createMany?: ExperienceCreateManyGrowthRateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  set?: ExperienceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExperienceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  delete?: ExperienceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  connect?: ExperienceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput], {
    nullable: true
  })
  update?: ExperienceUpdateWithWhereUniqueWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceUpdateManyWithWhereWithoutGrowthRateInput], {
    nullable: true
  })
  updateMany?: ExperienceUpdateManyWithWhereWithoutGrowthRateInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExperienceScalarWhereInput[] | undefined;
}

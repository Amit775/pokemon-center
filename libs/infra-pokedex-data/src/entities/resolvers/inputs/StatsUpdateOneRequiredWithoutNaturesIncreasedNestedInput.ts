import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateOrConnectWithoutNaturesIncreasedInput } from "../inputs/StatsCreateOrConnectWithoutNaturesIncreasedInput";
import { StatsCreateWithoutNaturesIncreasedInput } from "../inputs/StatsCreateWithoutNaturesIncreasedInput";
import { StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput } from "../inputs/StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput";
import { StatsUpsertWithoutNaturesIncreasedInput } from "../inputs/StatsUpsertWithoutNaturesIncreasedInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput", {})
export class StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput {
  @TypeGraphQL.Field(_type => StatsCreateWithoutNaturesIncreasedInput, {
    nullable: true
  })
  create?: StatsCreateWithoutNaturesIncreasedInput | undefined;

  @TypeGraphQL.Field(_type => StatsCreateOrConnectWithoutNaturesIncreasedInput, {
    nullable: true
  })
  connectOrCreate?: StatsCreateOrConnectWithoutNaturesIncreasedInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpsertWithoutNaturesIncreasedInput, {
    nullable: true
  })
  upsert?: StatsUpsertWithoutNaturesIncreasedInput | undefined;

  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: true
  })
  connect?: StatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput, {
    nullable: true
  })
  update?: StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput | undefined;
}

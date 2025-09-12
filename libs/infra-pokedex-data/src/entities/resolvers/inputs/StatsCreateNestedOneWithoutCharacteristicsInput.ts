import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateOrConnectWithoutCharacteristicsInput } from "../inputs/StatsCreateOrConnectWithoutCharacteristicsInput";
import { StatsCreateWithoutCharacteristicsInput } from "../inputs/StatsCreateWithoutCharacteristicsInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsCreateNestedOneWithoutCharacteristicsInput", {})
export class StatsCreateNestedOneWithoutCharacteristicsInput {
  @TypeGraphQL.Field(_type => StatsCreateWithoutCharacteristicsInput, {
    nullable: true
  })
  create?: StatsCreateWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatsCreateOrConnectWithoutCharacteristicsInput, {
    nullable: true
  })
  connectOrCreate?: StatsCreateOrConnectWithoutCharacteristicsInput | undefined;

  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: true
  })
  connect?: StatsWhereUniqueInput | undefined;
}

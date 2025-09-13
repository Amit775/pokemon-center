import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutCharacteristicsInput } from "../inputs/StatsCreateWithoutCharacteristicsInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsCreateOrConnectWithoutCharacteristicsInput", {})
export class StatsCreateOrConnectWithoutCharacteristicsInput {
  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: false
  })
  where!: StatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutCharacteristicsInput, {
    nullable: false
  })
  create!: StatsCreateWithoutCharacteristicsInput;
}

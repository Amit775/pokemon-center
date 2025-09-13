import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutNaturesIncreasedInput } from "../inputs/StatsCreateWithoutNaturesIncreasedInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsCreateOrConnectWithoutNaturesIncreasedInput", {})
export class StatsCreateOrConnectWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: false
  })
  where!: StatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  create!: StatsCreateWithoutNaturesIncreasedInput;
}

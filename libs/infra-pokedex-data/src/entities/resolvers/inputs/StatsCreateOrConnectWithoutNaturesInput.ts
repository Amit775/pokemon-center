import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutNaturesInput } from "../inputs/StatsCreateWithoutNaturesInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsCreateOrConnectWithoutNaturesInput", {})
export class StatsCreateOrConnectWithoutNaturesInput {
  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: false
  })
  where!: StatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutNaturesInput, {
    nullable: false
  })
  create!: StatsCreateWithoutNaturesInput;
}

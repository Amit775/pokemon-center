import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateOrConnectWithoutNaturesInput } from "../inputs/StatsCreateOrConnectWithoutNaturesInput";
import { StatsCreateWithoutNaturesInput } from "../inputs/StatsCreateWithoutNaturesInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsCreateNestedOneWithoutNaturesInput", {})
export class StatsCreateNestedOneWithoutNaturesInput {
  @TypeGraphQL.Field(_type => StatsCreateWithoutNaturesInput, {
    nullable: true
  })
  create?: StatsCreateWithoutNaturesInput | undefined;

  @TypeGraphQL.Field(_type => StatsCreateOrConnectWithoutNaturesInput, {
    nullable: true
  })
  connectOrCreate?: StatsCreateOrConnectWithoutNaturesInput | undefined;

  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: true
  })
  connect?: StatsWhereUniqueInput | undefined;
}

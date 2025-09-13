import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutNaturesInput } from "../inputs/StatsCreateWithoutNaturesInput";
import { StatsUpdateWithoutNaturesInput } from "../inputs/StatsUpdateWithoutNaturesInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpsertWithoutNaturesInput", {})
export class StatsUpsertWithoutNaturesInput {
  @TypeGraphQL.Field(_type => StatsUpdateWithoutNaturesInput, {
    nullable: false
  })
  update!: StatsUpdateWithoutNaturesInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutNaturesInput, {
    nullable: false
  })
  create!: StatsCreateWithoutNaturesInput;

  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;
}

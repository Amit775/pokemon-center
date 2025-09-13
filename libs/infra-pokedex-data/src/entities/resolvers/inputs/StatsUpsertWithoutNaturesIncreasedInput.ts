import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutNaturesIncreasedInput } from "../inputs/StatsCreateWithoutNaturesIncreasedInput";
import { StatsUpdateWithoutNaturesIncreasedInput } from "../inputs/StatsUpdateWithoutNaturesIncreasedInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpsertWithoutNaturesIncreasedInput", {})
export class StatsUpsertWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => StatsUpdateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  update!: StatsUpdateWithoutNaturesIncreasedInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  create!: StatsCreateWithoutNaturesIncreasedInput;

  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;
}

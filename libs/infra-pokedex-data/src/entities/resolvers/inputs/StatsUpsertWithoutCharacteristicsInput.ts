import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutCharacteristicsInput } from "../inputs/StatsCreateWithoutCharacteristicsInput";
import { StatsUpdateWithoutCharacteristicsInput } from "../inputs/StatsUpdateWithoutCharacteristicsInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpsertWithoutCharacteristicsInput", {})
export class StatsUpsertWithoutCharacteristicsInput {
  @TypeGraphQL.Field(_type => StatsUpdateWithoutCharacteristicsInput, {
    nullable: false
  })
  update!: StatsUpdateWithoutCharacteristicsInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutCharacteristicsInput, {
    nullable: false
  })
  create!: StatsCreateWithoutCharacteristicsInput;

  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;
}

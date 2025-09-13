import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsUpdateWithoutCharacteristicsInput } from "../inputs/StatsUpdateWithoutCharacteristicsInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpdateToOneWithWhereWithoutCharacteristicsInput", {})
export class StatsUpdateToOneWithWhereWithoutCharacteristicsInput {
  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateWithoutCharacteristicsInput, {
    nullable: false
  })
  data!: StatsUpdateWithoutCharacteristicsInput;
}

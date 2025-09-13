import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsUpdateWithoutNaturesIncreasedInput } from "../inputs/StatsUpdateWithoutNaturesIncreasedInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput", {})
export class StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  data!: StatsUpdateWithoutNaturesIncreasedInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsUpdateWithoutNaturesInput } from "../inputs/StatsUpdateWithoutNaturesInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpdateToOneWithWhereWithoutNaturesInput", {})
export class StatsUpdateToOneWithWhereWithoutNaturesInput {
  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateWithoutNaturesInput, {
    nullable: false
  })
  data!: StatsUpdateWithoutNaturesInput;
}

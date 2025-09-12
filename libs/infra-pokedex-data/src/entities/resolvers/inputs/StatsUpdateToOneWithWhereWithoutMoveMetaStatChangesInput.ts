import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsUpdateWithoutMoveMetaStatChangesInput } from "../inputs/StatsUpdateWithoutMoveMetaStatChangesInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpdateToOneWithWhereWithoutMoveMetaStatChangesInput", {})
export class StatsUpdateToOneWithWhereWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  data!: StatsUpdateWithoutMoveMetaStatChangesInput;
}

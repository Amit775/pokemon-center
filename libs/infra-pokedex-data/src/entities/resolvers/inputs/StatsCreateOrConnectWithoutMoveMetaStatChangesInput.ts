import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutMoveMetaStatChangesInput } from "../inputs/StatsCreateWithoutMoveMetaStatChangesInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsCreateOrConnectWithoutMoveMetaStatChangesInput", {})
export class StatsCreateOrConnectWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: false
  })
  where!: StatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  create!: StatsCreateWithoutMoveMetaStatChangesInput;
}

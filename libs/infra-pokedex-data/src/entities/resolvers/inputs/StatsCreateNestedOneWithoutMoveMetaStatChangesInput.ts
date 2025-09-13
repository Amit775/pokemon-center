import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateOrConnectWithoutMoveMetaStatChangesInput } from "../inputs/StatsCreateOrConnectWithoutMoveMetaStatChangesInput";
import { StatsCreateWithoutMoveMetaStatChangesInput } from "../inputs/StatsCreateWithoutMoveMetaStatChangesInput";
import { StatsWhereUniqueInput } from "../inputs/StatsWhereUniqueInput";

@TypeGraphQL.InputType("StatsCreateNestedOneWithoutMoveMetaStatChangesInput", {})
export class StatsCreateNestedOneWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => StatsCreateWithoutMoveMetaStatChangesInput, {
    nullable: true
  })
  create?: StatsCreateWithoutMoveMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => StatsCreateOrConnectWithoutMoveMetaStatChangesInput, {
    nullable: true
  })
  connectOrCreate?: StatsCreateOrConnectWithoutMoveMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: true
  })
  connect?: StatsWhereUniqueInput | undefined;
}

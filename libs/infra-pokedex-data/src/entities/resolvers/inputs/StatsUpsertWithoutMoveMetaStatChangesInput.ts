import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateWithoutMoveMetaStatChangesInput } from "../inputs/StatsCreateWithoutMoveMetaStatChangesInput";
import { StatsUpdateWithoutMoveMetaStatChangesInput } from "../inputs/StatsUpdateWithoutMoveMetaStatChangesInput";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsUpsertWithoutMoveMetaStatChangesInput", {})
export class StatsUpsertWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => StatsUpdateWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  update!: StatsUpdateWithoutMoveMetaStatChangesInput;

  @TypeGraphQL.Field(_type => StatsCreateWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  create!: StatsCreateWithoutMoveMetaStatChangesInput;

  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsCreateInput } from "../../../inputs/StatsCreateInput";
import { StatsUpdateInput } from "../../../inputs/StatsUpdateInput";
import { StatsWhereUniqueInput } from "../../../inputs/StatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneStatsArgs {
  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: false
  })
  where!: StatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatsCreateInput, {
    nullable: false
  })
  create!: StatsCreateInput;

  @TypeGraphQL.Field(_type => StatsUpdateInput, {
    nullable: false
  })
  update!: StatsUpdateInput;
}

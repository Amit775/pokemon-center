import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsUpdateInput } from "../../../inputs/StatsUpdateInput";
import { StatsWhereUniqueInput } from "../../../inputs/StatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStatsArgs {
  @TypeGraphQL.Field(_type => StatsUpdateInput, {
    nullable: false
  })
  data!: StatsUpdateInput;

  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: false
  })
  where!: StatsWhereUniqueInput;
}

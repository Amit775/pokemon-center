import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsWhereUniqueInput } from "../../../inputs/StatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueStatsArgs {
  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: false
  })
  where!: StatsWhereUniqueInput;
}

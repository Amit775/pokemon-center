import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsWhereInput } from "../../../inputs/StatsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStatsArgs {
  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;
}

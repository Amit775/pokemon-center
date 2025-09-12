import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsCreateInput } from "../../../inputs/StatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStatsArgs {
  @TypeGraphQL.Field(_type => StatsCreateInput, {
    nullable: false
  })
  data!: StatsCreateInput;
}

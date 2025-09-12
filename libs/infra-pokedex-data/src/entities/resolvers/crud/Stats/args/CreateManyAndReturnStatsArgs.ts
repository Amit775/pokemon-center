import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsCreateManyInput } from "../../../inputs/StatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnStatsArgs {
  @TypeGraphQL.Field(_type => [StatsCreateManyInput], {
    nullable: false
  })
  data!: StatsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

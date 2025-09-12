import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsUpdateManyMutationInput } from "../../../inputs/StatsUpdateManyMutationInput";
import { StatsWhereInput } from "../../../inputs/StatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStatsArgs {
  @TypeGraphQL.Field(_type => StatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: StatsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;
}

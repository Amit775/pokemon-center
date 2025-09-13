import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsOrderByWithRelationInput } from "../../../inputs/StatsOrderByWithRelationInput";
import { StatsWhereInput } from "../../../inputs/StatsWhereInput";
import { StatsWhereUniqueInput } from "../../../inputs/StatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStatsArgs {
  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StatsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: StatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

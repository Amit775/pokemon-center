import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsOrderByWithRelationInput } from "../../../inputs/StatsOrderByWithRelationInput";
import { StatsWhereInput } from "../../../inputs/StatsWhereInput";
import { StatsWhereUniqueInput } from "../../../inputs/StatsWhereUniqueInput";
import { StatsScalarFieldEnum } from "../../../../enums/StatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstStatsOrThrowArgs {
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

  @TypeGraphQL.Field(_type => [StatsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "damage_class_id" | "identifier" | "is_battle_only" | "game_index"> | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureOrderByWithAggregationInput } from "../../../inputs/NatureOrderByWithAggregationInput";
import { NatureScalarWhereWithAggregatesInput } from "../../../inputs/NatureScalarWhereWithAggregatesInput";
import { NatureWhereInput } from "../../../inputs/NatureWhereInput";
import { NatureScalarFieldEnum } from "../../../../enums/NatureScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNatureArgs {
  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  where?: NatureWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NatureOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NatureOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "decreased_stat_id" | "increased_stat_id" | "hates_flavor_id" | "likes_flavor_id" | "game_index">;

  @TypeGraphQL.Field(_type => NatureScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NatureScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

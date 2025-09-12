import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NaturesOrderByWithAggregationInput } from "../../../inputs/NaturesOrderByWithAggregationInput";
import { NaturesScalarWhereWithAggregatesInput } from "../../../inputs/NaturesScalarWhereWithAggregatesInput";
import { NaturesWhereInput } from "../../../inputs/NaturesWhereInput";
import { NaturesScalarFieldEnum } from "../../../../enums/NaturesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNaturesArgs {
  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  where?: NaturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NaturesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NaturesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "decreased_stat_id" | "increased_stat_id" | "hates_flavor_id" | "likes_flavor_id" | "game_index">;

  @TypeGraphQL.Field(_type => NaturesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NaturesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

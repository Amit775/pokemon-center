import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationsOrderByWithAggregationInput } from "../../../inputs/GenerationsOrderByWithAggregationInput";
import { GenerationsScalarWhereWithAggregatesInput } from "../../../inputs/GenerationsScalarWhereWithAggregatesInput";
import { GenerationsWhereInput } from "../../../inputs/GenerationsWhereInput";
import { GenerationsScalarFieldEnum } from "../../../../enums/GenerationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGenerationsArgs {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GenerationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GenerationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "main_region_id" | "identifier">;

  @TypeGraphQL.Field(_type => GenerationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GenerationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

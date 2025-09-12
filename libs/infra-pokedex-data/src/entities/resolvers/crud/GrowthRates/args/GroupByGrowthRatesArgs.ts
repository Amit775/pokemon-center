import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrowthRatesOrderByWithAggregationInput } from "../../../inputs/GrowthRatesOrderByWithAggregationInput";
import { GrowthRatesScalarWhereWithAggregatesInput } from "../../../inputs/GrowthRatesScalarWhereWithAggregatesInput";
import { GrowthRatesWhereInput } from "../../../inputs/GrowthRatesWhereInput";
import { GrowthRatesScalarFieldEnum } from "../../../../enums/GrowthRatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGrowthRatesArgs {
  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  where?: GrowthRatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GrowthRatesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GrowthRatesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrowthRatesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "formula">;

  @TypeGraphQL.Field(_type => GrowthRatesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GrowthRatesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

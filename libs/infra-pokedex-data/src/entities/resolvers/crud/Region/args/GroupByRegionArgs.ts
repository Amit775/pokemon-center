import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionOrderByWithAggregationInput } from "../../../inputs/RegionOrderByWithAggregationInput";
import { RegionScalarWhereWithAggregatesInput } from "../../../inputs/RegionScalarWhereWithAggregatesInput";
import { RegionWhereInput } from "../../../inputs/RegionWhereInput";
import { RegionScalarFieldEnum } from "../../../../enums/RegionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRegionArgs {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RegionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RegionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => RegionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RegionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

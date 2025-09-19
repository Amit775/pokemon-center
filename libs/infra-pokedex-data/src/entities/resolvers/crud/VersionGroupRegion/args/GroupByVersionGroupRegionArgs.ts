import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionOrderByWithAggregationInput } from "../../../inputs/VersionGroupRegionOrderByWithAggregationInput";
import { VersionGroupRegionScalarWhereWithAggregatesInput } from "../../../inputs/VersionGroupRegionScalarWhereWithAggregatesInput";
import { VersionGroupRegionWhereInput } from "../../../inputs/VersionGroupRegionWhereInput";
import { VersionGroupRegionScalarFieldEnum } from "../../../../enums/VersionGroupRegionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersionGroupRegionArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereInput, {
    nullable: true
  })
  where?: VersionGroupRegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VersionGroupRegionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"version_group_id" | "region_id">;

  @TypeGraphQL.Field(_type => VersionGroupRegionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VersionGroupRegionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

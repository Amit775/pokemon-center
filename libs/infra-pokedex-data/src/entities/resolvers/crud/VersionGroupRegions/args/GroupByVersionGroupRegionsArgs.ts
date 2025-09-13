import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionsOrderByWithAggregationInput } from "../../../inputs/VersionGroupRegionsOrderByWithAggregationInput";
import { VersionGroupRegionsScalarWhereWithAggregatesInput } from "../../../inputs/VersionGroupRegionsScalarWhereWithAggregatesInput";
import { VersionGroupRegionsWhereInput } from "../../../inputs/VersionGroupRegionsWhereInput";
import { VersionGroupRegionsScalarFieldEnum } from "../../../../enums/VersionGroupRegionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersionGroupRegionsArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereInput, {
    nullable: true
  })
  where?: VersionGroupRegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VersionGroupRegionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"version_group_id" | "region_id">;

  @TypeGraphQL.Field(_type => VersionGroupRegionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VersionGroupRegionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

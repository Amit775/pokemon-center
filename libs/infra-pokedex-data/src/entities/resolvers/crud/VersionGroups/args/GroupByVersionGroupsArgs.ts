import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupsOrderByWithAggregationInput } from "../../../inputs/VersionGroupsOrderByWithAggregationInput";
import { VersionGroupsScalarWhereWithAggregatesInput } from "../../../inputs/VersionGroupsScalarWhereWithAggregatesInput";
import { VersionGroupsWhereInput } from "../../../inputs/VersionGroupsWhereInput";
import { VersionGroupsScalarFieldEnum } from "../../../../enums/VersionGroupsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VersionGroupsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "generation_id" | "order">;

  @TypeGraphQL.Field(_type => VersionGroupsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VersionGroupsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

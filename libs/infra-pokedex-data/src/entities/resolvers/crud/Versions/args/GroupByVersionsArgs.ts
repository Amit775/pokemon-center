import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsOrderByWithAggregationInput } from "../../../inputs/VersionsOrderByWithAggregationInput";
import { VersionsScalarWhereWithAggregatesInput } from "../../../inputs/VersionsScalarWhereWithAggregatesInput";
import { VersionsWhereInput } from "../../../inputs/VersionsWhereInput";
import { VersionsScalarFieldEnum } from "../../../../enums/VersionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VersionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_group_id" | "identifier">;

  @TypeGraphQL.Field(_type => VersionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VersionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

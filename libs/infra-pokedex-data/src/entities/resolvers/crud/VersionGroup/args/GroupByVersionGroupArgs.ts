import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupOrderByWithAggregationInput } from "../../../inputs/VersionGroupOrderByWithAggregationInput";
import { VersionGroupScalarWhereWithAggregatesInput } from "../../../inputs/VersionGroupScalarWhereWithAggregatesInput";
import { VersionGroupWhereInput } from "../../../inputs/VersionGroupWhereInput";
import { VersionGroupScalarFieldEnum } from "../../../../enums/VersionGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersionGroupArgs {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VersionGroupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "generation_id" | "order">;

  @TypeGraphQL.Field(_type => VersionGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VersionGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

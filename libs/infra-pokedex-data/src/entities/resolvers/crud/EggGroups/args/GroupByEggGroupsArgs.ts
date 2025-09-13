import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupsOrderByWithAggregationInput } from "../../../inputs/EggGroupsOrderByWithAggregationInput";
import { EggGroupsScalarWhereWithAggregatesInput } from "../../../inputs/EggGroupsScalarWhereWithAggregatesInput";
import { EggGroupsWhereInput } from "../../../inputs/EggGroupsWhereInput";
import { EggGroupsScalarFieldEnum } from "../../../../enums/EggGroupsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEggGroupsArgs {
  @TypeGraphQL.Field(_type => EggGroupsWhereInput, {
    nullable: true
  })
  where?: EggGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EggGroupsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EggGroupsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EggGroupsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => EggGroupsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EggGroupsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupOrderByWithAggregationInput } from "../../../inputs/EggGroupOrderByWithAggregationInput";
import { EggGroupScalarWhereWithAggregatesInput } from "../../../inputs/EggGroupScalarWhereWithAggregatesInput";
import { EggGroupWhereInput } from "../../../inputs/EggGroupWhereInput";
import { EggGroupScalarFieldEnum } from "../../../../enums/EggGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEggGroupArgs {
  @TypeGraphQL.Field(_type => EggGroupWhereInput, {
    nullable: true
  })
  where?: EggGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EggGroupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EggGroupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EggGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => EggGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EggGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassOrderByWithAggregationInput } from "../../../inputs/MoveDamageClassOrderByWithAggregationInput";
import { MoveDamageClassScalarWhereWithAggregatesInput } from "../../../inputs/MoveDamageClassScalarWhereWithAggregatesInput";
import { MoveDamageClassWhereInput } from "../../../inputs/MoveDamageClassWhereInput";
import { MoveDamageClassScalarFieldEnum } from "../../../../enums/MoveDamageClassScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveDamageClassArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveDamageClassOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveDamageClassScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveDamageClassScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

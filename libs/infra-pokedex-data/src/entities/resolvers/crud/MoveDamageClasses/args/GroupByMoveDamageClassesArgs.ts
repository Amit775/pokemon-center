import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveDamageClassesOrderByWithAggregationInput } from "../../../inputs/MoveDamageClassesOrderByWithAggregationInput";
import { MoveDamageClassesScalarWhereWithAggregatesInput } from "../../../inputs/MoveDamageClassesScalarWhereWithAggregatesInput";
import { MoveDamageClassesWhereInput } from "../../../inputs/MoveDamageClassesWhereInput";
import { MoveDamageClassesScalarFieldEnum } from "../../../../enums/MoveDamageClassesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveDamageClassesArgs {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveDamageClassesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveDamageClassesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveDamageClassesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveDamageClassesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

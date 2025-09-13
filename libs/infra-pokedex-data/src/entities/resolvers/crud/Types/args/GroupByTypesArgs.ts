import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypesOrderByWithAggregationInput } from "../../../inputs/TypesOrderByWithAggregationInput";
import { TypesScalarWhereWithAggregatesInput } from "../../../inputs/TypesScalarWhereWithAggregatesInput";
import { TypesWhereInput } from "../../../inputs/TypesWhereInput";
import { TypesScalarFieldEnum } from "../../../../enums/TypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTypesArgs {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TypesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "generation_id" | "damage_class_id">;

  @TypeGraphQL.Field(_type => TypesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TypesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeOrderByWithAggregationInput } from "../../../inputs/TypeOrderByWithAggregationInput";
import { TypeScalarWhereWithAggregatesInput } from "../../../inputs/TypeScalarWhereWithAggregatesInput";
import { TypeWhereInput } from "../../../inputs/TypeWhereInput";
import { TypeScalarFieldEnum } from "../../../../enums/TypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTypeArgs {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "generation_id" | "damage_class_id">;

  @TypeGraphQL.Field(_type => TypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

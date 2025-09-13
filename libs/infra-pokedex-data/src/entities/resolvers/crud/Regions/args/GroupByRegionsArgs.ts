import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionsOrderByWithAggregationInput } from "../../../inputs/RegionsOrderByWithAggregationInput";
import { RegionsScalarWhereWithAggregatesInput } from "../../../inputs/RegionsScalarWhereWithAggregatesInput";
import { RegionsWhereInput } from "../../../inputs/RegionsWhereInput";
import { RegionsScalarFieldEnum } from "../../../../enums/RegionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRegionsArgs {
  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RegionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RegionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => RegionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RegionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GendersOrderByWithAggregationInput } from "../../../inputs/GendersOrderByWithAggregationInput";
import { GendersScalarWhereWithAggregatesInput } from "../../../inputs/GendersScalarWhereWithAggregatesInput";
import { GendersWhereInput } from "../../../inputs/GendersWhereInput";
import { GendersScalarFieldEnum } from "../../../../enums/GendersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGendersArgs {
  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  where?: GendersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GendersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GendersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GendersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => GendersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GendersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

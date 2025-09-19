import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexOrderByWithAggregationInput } from "../../../inputs/TypeGameIndexOrderByWithAggregationInput";
import { TypeGameIndexScalarWhereWithAggregatesInput } from "../../../inputs/TypeGameIndexScalarWhereWithAggregatesInput";
import { TypeGameIndexWhereInput } from "../../../inputs/TypeGameIndexWhereInput";
import { TypeGameIndexScalarFieldEnum } from "../../../../enums/TypeGameIndexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTypeGameIndexArgs {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereInput, {
    nullable: true
  })
  where?: TypeGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TypeGameIndexOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"type_id" | "generation_id" | "game_index">;

  @TypeGraphQL.Field(_type => TypeGameIndexScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TypeGameIndexScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

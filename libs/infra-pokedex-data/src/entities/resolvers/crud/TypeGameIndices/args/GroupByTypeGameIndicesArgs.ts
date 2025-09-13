import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndicesOrderByWithAggregationInput } from "../../../inputs/TypeGameIndicesOrderByWithAggregationInput";
import { TypeGameIndicesScalarWhereWithAggregatesInput } from "../../../inputs/TypeGameIndicesScalarWhereWithAggregatesInput";
import { TypeGameIndicesWhereInput } from "../../../inputs/TypeGameIndicesWhereInput";
import { TypeGameIndicesScalarFieldEnum } from "../../../../enums/TypeGameIndicesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTypeGameIndicesArgs {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereInput, {
    nullable: true
  })
  where?: TypeGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TypeGameIndicesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"type_id" | "generation_id" | "game_index">;

  @TypeGraphQL.Field(_type => TypeGameIndicesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TypeGameIndicesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

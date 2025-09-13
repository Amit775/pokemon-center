import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndicesOrderByWithAggregationInput } from "../../../inputs/LocationGameIndicesOrderByWithAggregationInput";
import { LocationGameIndicesScalarWhereWithAggregatesInput } from "../../../inputs/LocationGameIndicesScalarWhereWithAggregatesInput";
import { LocationGameIndicesWhereInput } from "../../../inputs/LocationGameIndicesWhereInput";
import { LocationGameIndicesScalarFieldEnum } from "../../../../enums/LocationGameIndicesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocationGameIndicesArgs {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereInput, {
    nullable: true
  })
  where?: LocationGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LocationGameIndicesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"location_id" | "generation_id" | "game_index">;

  @TypeGraphQL.Field(_type => LocationGameIndicesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocationGameIndicesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

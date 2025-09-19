import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexOrderByWithAggregationInput } from "../../../inputs/LocationGameIndexOrderByWithAggregationInput";
import { LocationGameIndexScalarWhereWithAggregatesInput } from "../../../inputs/LocationGameIndexScalarWhereWithAggregatesInput";
import { LocationGameIndexWhereInput } from "../../../inputs/LocationGameIndexWhereInput";
import { LocationGameIndexScalarFieldEnum } from "../../../../enums/LocationGameIndexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocationGameIndexArgs {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereInput, {
    nullable: true
  })
  where?: LocationGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LocationGameIndexOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"location_id" | "generation_id" | "game_index">;

  @TypeGraphQL.Field(_type => LocationGameIndexScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocationGameIndexScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

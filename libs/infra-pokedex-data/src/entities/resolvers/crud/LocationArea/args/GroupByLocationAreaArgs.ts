import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaOrderByWithAggregationInput } from "../../../inputs/LocationAreaOrderByWithAggregationInput";
import { LocationAreaScalarWhereWithAggregatesInput } from "../../../inputs/LocationAreaScalarWhereWithAggregatesInput";
import { LocationAreaWhereInput } from "../../../inputs/LocationAreaWhereInput";
import { LocationAreaScalarFieldEnum } from "../../../../enums/LocationAreaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocationAreaArgs {
  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  where?: LocationAreaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LocationAreaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "location_id" | "game_index" | "identifier">;

  @TypeGraphQL.Field(_type => LocationAreaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocationAreaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

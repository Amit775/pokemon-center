import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasOrderByWithAggregationInput } from "../../../inputs/LocationAreasOrderByWithAggregationInput";
import { LocationAreasScalarWhereWithAggregatesInput } from "../../../inputs/LocationAreasScalarWhereWithAggregatesInput";
import { LocationAreasWhereInput } from "../../../inputs/LocationAreasWhereInput";
import { LocationAreasScalarFieldEnum } from "../../../../enums/LocationAreasScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocationAreasArgs {
  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  where?: LocationAreasWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LocationAreasOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "location_id" | "game_index" | "identifier">;

  @TypeGraphQL.Field(_type => LocationAreasScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocationAreasScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

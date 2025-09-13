import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationsOrderByWithAggregationInput } from "../../../inputs/LocationsOrderByWithAggregationInput";
import { LocationsScalarWhereWithAggregatesInput } from "../../../inputs/LocationsScalarWhereWithAggregatesInput";
import { LocationsWhereInput } from "../../../inputs/LocationsWhereInput";
import { LocationsScalarFieldEnum } from "../../../../enums/LocationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocationsArgs {
  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  where?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LocationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "region_id" | "identifier">;

  @TypeGraphQL.Field(_type => LocationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

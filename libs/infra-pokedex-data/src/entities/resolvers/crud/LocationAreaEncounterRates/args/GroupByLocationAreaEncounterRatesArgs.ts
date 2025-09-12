import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesOrderByWithAggregationInput } from "../../../inputs/LocationAreaEncounterRatesOrderByWithAggregationInput";
import { LocationAreaEncounterRatesScalarWhereWithAggregatesInput } from "../../../inputs/LocationAreaEncounterRatesScalarWhereWithAggregatesInput";
import { LocationAreaEncounterRatesWhereInput } from "../../../inputs/LocationAreaEncounterRatesWhereInput";
import { LocationAreaEncounterRatesScalarFieldEnum } from "../../../../enums/LocationAreaEncounterRatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocationAreaEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereInput, {
    nullable: true
  })
  where?: LocationAreaEncounterRatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LocationAreaEncounterRatesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"location_area_id" | "encounter_method_id" | "version_id" | "rate">;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocationAreaEncounterRatesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

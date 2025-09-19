import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRateOrderByWithAggregationInput } from "../../../inputs/LocationAreaEncounterRateOrderByWithAggregationInput";
import { LocationAreaEncounterRateScalarWhereWithAggregatesInput } from "../../../inputs/LocationAreaEncounterRateScalarWhereWithAggregatesInput";
import { LocationAreaEncounterRateWhereInput } from "../../../inputs/LocationAreaEncounterRateWhereInput";
import { LocationAreaEncounterRateScalarFieldEnum } from "../../../../enums/LocationAreaEncounterRateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocationAreaEncounterRateArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereInput, {
    nullable: true
  })
  where?: LocationAreaEncounterRateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LocationAreaEncounterRateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"location_area_id" | "encounter_method_id" | "version_id" | "rate">;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocationAreaEncounterRateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

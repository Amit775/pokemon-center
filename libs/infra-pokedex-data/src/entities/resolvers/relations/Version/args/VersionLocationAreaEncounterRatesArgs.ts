import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRateOrderByWithRelationInput } from "../../../inputs/LocationAreaEncounterRateOrderByWithRelationInput";
import { LocationAreaEncounterRateWhereInput } from "../../../inputs/LocationAreaEncounterRateWhereInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../../../inputs/LocationAreaEncounterRateWhereUniqueInput";
import { LocationAreaEncounterRateScalarFieldEnum } from "../../../../enums/LocationAreaEncounterRateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class VersionLocationAreaEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereInput, {
    nullable: true
  })
  where?: LocationAreaEncounterRateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationAreaEncounterRateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationAreaEncounterRateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"location_area_id" | "encounter_method_id" | "version_id" | "rate"> | undefined;
}

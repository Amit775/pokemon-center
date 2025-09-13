import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesWhereInput } from "../../inputs/LocationAreaEncounterRatesWhereInput";

@TypeGraphQL.ArgsType()
export class LocationAreasCountEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereInput, {
    nullable: true
  })
  where?: LocationAreaEncounterRatesWhereInput | undefined;
}

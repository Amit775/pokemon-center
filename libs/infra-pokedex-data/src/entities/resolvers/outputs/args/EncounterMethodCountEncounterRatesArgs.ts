import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRateWhereInput } from "../../inputs/LocationAreaEncounterRateWhereInput";

@TypeGraphQL.ArgsType()
export class EncounterMethodCountEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereInput, {
    nullable: true
  })
  where?: LocationAreaEncounterRateWhereInput | undefined;
}

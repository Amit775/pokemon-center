import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRateWhereUniqueInput } from "../../../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLocationAreaEncounterRateArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;
}

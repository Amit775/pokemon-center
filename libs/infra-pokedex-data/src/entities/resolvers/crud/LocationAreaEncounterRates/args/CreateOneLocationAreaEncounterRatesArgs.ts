import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesCreateInput } from "../../../inputs/LocationAreaEncounterRatesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocationAreaEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRatesCreateInput;
}

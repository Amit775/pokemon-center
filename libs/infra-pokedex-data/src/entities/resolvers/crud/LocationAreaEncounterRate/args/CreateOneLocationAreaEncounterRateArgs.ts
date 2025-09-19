import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRateCreateInput } from "../../../inputs/LocationAreaEncounterRateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocationAreaEncounterRateArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRateCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../../../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLocationAreaEncounterRatesOrThrowArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;
}

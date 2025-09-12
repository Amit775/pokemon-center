import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesUpdateInput } from "../../../inputs/LocationAreaEncounterRatesUpdateInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../../../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLocationAreaEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRatesUpdateInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesCreateInput } from "../../../inputs/LocationAreaEncounterRatesCreateInput";
import { LocationAreaEncounterRatesUpdateInput } from "../../../inputs/LocationAreaEncounterRatesUpdateInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../../../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLocationAreaEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRatesCreateInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateInput, {
    nullable: false
  })
  update!: LocationAreaEncounterRatesUpdateInput;
}

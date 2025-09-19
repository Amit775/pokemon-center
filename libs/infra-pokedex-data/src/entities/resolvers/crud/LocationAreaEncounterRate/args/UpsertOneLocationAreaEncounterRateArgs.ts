import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRateCreateInput } from "../../../inputs/LocationAreaEncounterRateCreateInput";
import { LocationAreaEncounterRateUpdateInput } from "../../../inputs/LocationAreaEncounterRateUpdateInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../../../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLocationAreaEncounterRateArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateInput, {
    nullable: false
  })
  create!: LocationAreaEncounterRateCreateInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateInput, {
    nullable: false
  })
  update!: LocationAreaEncounterRateUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRateUpdateInput } from "../../../inputs/LocationAreaEncounterRateUpdateInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../../../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLocationAreaEncounterRateArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRateUpdateInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRateUpdateManyMutationInput } from "../../../inputs/LocationAreaEncounterRateUpdateManyMutationInput";
import { LocationAreaEncounterRateWhereInput } from "../../../inputs/LocationAreaEncounterRateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocationAreaEncounterRateArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereInput, {
    nullable: true
  })
  where?: LocationAreaEncounterRateWhereInput | undefined;
}

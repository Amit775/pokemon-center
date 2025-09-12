import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesUpdateManyMutationInput } from "../../../inputs/LocationAreaEncounterRatesUpdateManyMutationInput";
import { LocationAreaEncounterRatesWhereInput } from "../../../inputs/LocationAreaEncounterRatesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocationAreaEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRatesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereInput, {
    nullable: true
  })
  where?: LocationAreaEncounterRatesWhereInput | undefined;
}

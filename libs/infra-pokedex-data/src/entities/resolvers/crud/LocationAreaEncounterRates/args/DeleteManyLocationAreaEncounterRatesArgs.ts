import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesWhereInput } from "../../../inputs/LocationAreaEncounterRatesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLocationAreaEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereInput, {
    nullable: true
  })
  where?: LocationAreaEncounterRatesWhereInput | undefined;
}

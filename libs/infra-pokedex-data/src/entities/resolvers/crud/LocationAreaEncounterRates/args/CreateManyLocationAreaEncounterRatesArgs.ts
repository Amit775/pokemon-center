import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesCreateManyInput } from "../../../inputs/LocationAreaEncounterRatesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLocationAreaEncounterRatesArgs {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateManyInput], {
    nullable: false
  })
  data!: LocationAreaEncounterRatesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

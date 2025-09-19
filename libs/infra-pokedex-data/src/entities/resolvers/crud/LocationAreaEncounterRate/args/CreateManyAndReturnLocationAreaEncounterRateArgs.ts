import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRateCreateManyInput } from "../../../inputs/LocationAreaEncounterRateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnLocationAreaEncounterRateArgs {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateManyInput], {
    nullable: false
  })
  data!: LocationAreaEncounterRateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

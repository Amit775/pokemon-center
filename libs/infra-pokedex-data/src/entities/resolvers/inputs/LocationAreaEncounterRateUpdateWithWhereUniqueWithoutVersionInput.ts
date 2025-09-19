import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateUpdateWithoutVersionInput } from "../inputs/LocationAreaEncounterRateUpdateWithoutVersionInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpdateWithWhereUniqueWithoutVersionInput", {})
export class LocationAreaEncounterRateUpdateWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateWithoutVersionInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRateUpdateWithoutVersionInput;
}

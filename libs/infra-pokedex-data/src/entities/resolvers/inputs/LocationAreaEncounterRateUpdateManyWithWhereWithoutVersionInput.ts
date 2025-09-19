import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateScalarWhereInput } from "../inputs/LocationAreaEncounterRateScalarWhereInput";
import { LocationAreaEncounterRateUpdateManyMutationInput } from "../inputs/LocationAreaEncounterRateUpdateManyMutationInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpdateManyWithWhereWithoutVersionInput", {})
export class LocationAreaEncounterRateUpdateManyWithWhereWithoutVersionInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRateScalarWhereInput, {
    nullable: false
  })
  where!: LocationAreaEncounterRateScalarWhereInput;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationAreaEncounterRateUpdateManyMutationInput;
}

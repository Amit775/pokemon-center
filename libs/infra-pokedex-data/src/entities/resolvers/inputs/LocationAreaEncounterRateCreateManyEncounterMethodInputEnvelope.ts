import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateManyEncounterMethodInput } from "../inputs/LocationAreaEncounterRateCreateManyEncounterMethodInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope", {})
export class LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateManyEncounterMethodInput], {
    nullable: false
  })
  data!: LocationAreaEncounterRateCreateManyEncounterMethodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

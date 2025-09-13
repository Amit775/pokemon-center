import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateManyEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesCreateManyEncounterMethodInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope", {})
export class LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateManyEncounterMethodInput], {
    nullable: false
  })
  data!: LocationAreaEncounterRatesCreateManyEncounterMethodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

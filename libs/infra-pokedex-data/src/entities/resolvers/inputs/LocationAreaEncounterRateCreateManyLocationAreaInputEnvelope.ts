import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateManyLocationAreaInput } from "../inputs/LocationAreaEncounterRateCreateManyLocationAreaInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope", {})
export class LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateManyLocationAreaInput], {
    nullable: false
  })
  data!: LocationAreaEncounterRateCreateManyLocationAreaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

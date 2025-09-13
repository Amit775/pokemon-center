import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateManyLocationAreaInput } from "../inputs/LocationAreaEncounterRatesCreateManyLocationAreaInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope", {})
export class LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateManyLocationAreaInput], {
    nullable: false
  })
  data!: LocationAreaEncounterRatesCreateManyLocationAreaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

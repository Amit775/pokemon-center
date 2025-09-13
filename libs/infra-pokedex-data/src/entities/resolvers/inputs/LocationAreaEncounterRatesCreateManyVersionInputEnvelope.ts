import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateManyVersionInput } from "../inputs/LocationAreaEncounterRatesCreateManyVersionInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesCreateManyVersionInputEnvelope", {})
export class LocationAreaEncounterRatesCreateManyVersionInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateManyVersionInput], {
    nullable: false
  })
  data!: LocationAreaEncounterRatesCreateManyVersionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

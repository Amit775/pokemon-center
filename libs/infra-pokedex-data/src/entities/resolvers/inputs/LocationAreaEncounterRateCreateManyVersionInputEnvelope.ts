import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateManyVersionInput } from "../inputs/LocationAreaEncounterRateCreateManyVersionInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateManyVersionInputEnvelope", {})
export class LocationAreaEncounterRateCreateManyVersionInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateManyVersionInput], {
    nullable: false
  })
  data!: LocationAreaEncounterRateCreateManyVersionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateWithoutEncounterRatesInput } from "../inputs/LocationAreaCreateWithoutEncounterRatesInput";
import { LocationAreaUpdateWithoutEncounterRatesInput } from "../inputs/LocationAreaUpdateWithoutEncounterRatesInput";
import { LocationAreaWhereInput } from "../inputs/LocationAreaWhereInput";

@TypeGraphQL.InputType("LocationAreaUpsertWithoutEncounterRatesInput", {})
export class LocationAreaUpsertWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => LocationAreaUpdateWithoutEncounterRatesInput, {
    nullable: false
  })
  update!: LocationAreaUpdateWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => LocationAreaCreateWithoutEncounterRatesInput, {
    nullable: false
  })
  create!: LocationAreaCreateWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  where?: LocationAreaWhereInput | undefined;
}

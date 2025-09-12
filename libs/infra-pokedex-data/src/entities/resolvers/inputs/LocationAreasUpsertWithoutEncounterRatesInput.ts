import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateWithoutEncounterRatesInput } from "../inputs/LocationAreasCreateWithoutEncounterRatesInput";
import { LocationAreasUpdateWithoutEncounterRatesInput } from "../inputs/LocationAreasUpdateWithoutEncounterRatesInput";
import { LocationAreasWhereInput } from "../inputs/LocationAreasWhereInput";

@TypeGraphQL.InputType("LocationAreasUpsertWithoutEncounterRatesInput", {})
export class LocationAreasUpsertWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => LocationAreasUpdateWithoutEncounterRatesInput, {
    nullable: false
  })
  update!: LocationAreasUpdateWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => LocationAreasCreateWithoutEncounterRatesInput, {
    nullable: false
  })
  create!: LocationAreasCreateWithoutEncounterRatesInput;

  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  where?: LocationAreasWhereInput | undefined;
}

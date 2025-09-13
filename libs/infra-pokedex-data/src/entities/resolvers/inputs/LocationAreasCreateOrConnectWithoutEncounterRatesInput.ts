import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateWithoutEncounterRatesInput } from "../inputs/LocationAreasCreateWithoutEncounterRatesInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasCreateOrConnectWithoutEncounterRatesInput", {})
export class LocationAreasCreateOrConnectWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreasWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreasCreateWithoutEncounterRatesInput, {
    nullable: false
  })
  create!: LocationAreasCreateWithoutEncounterRatesInput;
}

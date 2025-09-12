import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCreateOrConnectWithoutEncounterRatesInput } from "../inputs/LocationAreasCreateOrConnectWithoutEncounterRatesInput";
import { LocationAreasCreateWithoutEncounterRatesInput } from "../inputs/LocationAreasCreateWithoutEncounterRatesInput";
import { LocationAreasWhereUniqueInput } from "../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreasCreateNestedOneWithoutEncounterRatesInput", {})
export class LocationAreasCreateNestedOneWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => LocationAreasCreateWithoutEncounterRatesInput, {
    nullable: true
  })
  create?: LocationAreasCreateWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasCreateOrConnectWithoutEncounterRatesInput, {
    nullable: true
  })
  connectOrCreate?: LocationAreasCreateOrConnectWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationAreasWhereUniqueInput | undefined;
}

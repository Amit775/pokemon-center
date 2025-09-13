import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasUpdateWithoutEncounterRatesInput } from "../inputs/LocationAreasUpdateWithoutEncounterRatesInput";
import { LocationAreasWhereInput } from "../inputs/LocationAreasWhereInput";

@TypeGraphQL.InputType("LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput", {})
export class LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  where?: LocationAreasWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateWithoutEncounterRatesInput, {
    nullable: false
  })
  data!: LocationAreasUpdateWithoutEncounterRatesInput;
}

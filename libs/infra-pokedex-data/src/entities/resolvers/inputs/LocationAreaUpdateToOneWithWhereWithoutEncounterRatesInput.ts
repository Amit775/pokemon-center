import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaUpdateWithoutEncounterRatesInput } from "../inputs/LocationAreaUpdateWithoutEncounterRatesInput";
import { LocationAreaWhereInput } from "../inputs/LocationAreaWhereInput";

@TypeGraphQL.InputType("LocationAreaUpdateToOneWithWhereWithoutEncounterRatesInput", {})
export class LocationAreaUpdateToOneWithWhereWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  where?: LocationAreaWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaUpdateWithoutEncounterRatesInput, {
    nullable: false
  })
  data!: LocationAreaUpdateWithoutEncounterRatesInput;
}

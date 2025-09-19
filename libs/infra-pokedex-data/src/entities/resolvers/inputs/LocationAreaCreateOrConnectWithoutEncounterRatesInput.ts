import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateWithoutEncounterRatesInput } from "../inputs/LocationAreaCreateWithoutEncounterRatesInput";
import { LocationAreaWhereUniqueInput } from "../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaCreateOrConnectWithoutEncounterRatesInput", {})
export class LocationAreaCreateOrConnectWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaCreateWithoutEncounterRatesInput, {
    nullable: false
  })
  create!: LocationAreaCreateWithoutEncounterRatesInput;
}

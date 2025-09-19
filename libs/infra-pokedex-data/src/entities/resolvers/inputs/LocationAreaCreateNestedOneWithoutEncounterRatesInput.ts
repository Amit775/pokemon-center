import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateOrConnectWithoutEncounterRatesInput } from "../inputs/LocationAreaCreateOrConnectWithoutEncounterRatesInput";
import { LocationAreaCreateWithoutEncounterRatesInput } from "../inputs/LocationAreaCreateWithoutEncounterRatesInput";
import { LocationAreaWhereUniqueInput } from "../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaCreateNestedOneWithoutEncounterRatesInput", {})
export class LocationAreaCreateNestedOneWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => LocationAreaCreateWithoutEncounterRatesInput, {
    nullable: true
  })
  create?: LocationAreaCreateWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaCreateOrConnectWithoutEncounterRatesInput, {
    nullable: true
  })
  connectOrCreate?: LocationAreaCreateOrConnectWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationAreaWhereUniqueInput | undefined;
}

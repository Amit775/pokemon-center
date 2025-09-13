import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope } from "../inputs/LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope";
import { LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesCreateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRatesCreateWithoutEncounterMethodInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateWithoutEncounterMethodInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRatesCreateWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaEncounterRatesWhereUniqueInput[] | undefined;
}

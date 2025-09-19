import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope } from "../inputs/LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope";
import { LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput";
import { LocationAreaEncounterRateCreateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateCreateWithoutEncounterMethodInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateNestedManyWithoutEncounterMethodInput", {})
export class LocationAreaEncounterRateCreateNestedManyWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateWithoutEncounterMethodInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRateCreateWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaEncounterRateWhereUniqueInput[] | undefined;
}

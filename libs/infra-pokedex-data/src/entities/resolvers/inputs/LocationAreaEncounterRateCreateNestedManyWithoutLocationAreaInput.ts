import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope } from "../inputs/LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope";
import { LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput";
import { LocationAreaEncounterRateCreateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateCreateWithoutLocationAreaInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput", {})
export class LocationAreaEncounterRateCreateNestedManyWithoutLocationAreaInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateWithoutLocationAreaInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRateCreateWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaEncounterRateWhereUniqueInput[] | undefined;
}

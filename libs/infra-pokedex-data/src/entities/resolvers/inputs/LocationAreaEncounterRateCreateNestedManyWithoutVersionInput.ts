import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateManyVersionInputEnvelope } from "../inputs/LocationAreaEncounterRateCreateManyVersionInputEnvelope";
import { LocationAreaEncounterRateCreateOrConnectWithoutVersionInput } from "../inputs/LocationAreaEncounterRateCreateOrConnectWithoutVersionInput";
import { LocationAreaEncounterRateCreateWithoutVersionInput } from "../inputs/LocationAreaEncounterRateCreateWithoutVersionInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateCreateNestedManyWithoutVersionInput", {})
export class LocationAreaEncounterRateCreateNestedManyWithoutVersionInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateWithoutVersionInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRateCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRateCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRateCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaEncounterRateWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope } from "../inputs/LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope";
import { LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput";
import { LocationAreaEncounterRateCreateWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateCreateWithoutEncounterMethodInput";
import { LocationAreaEncounterRateScalarWhereInput } from "../inputs/LocationAreaEncounterRateScalarWhereInput";
import { LocationAreaEncounterRateUpdateManyWithWhereWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateUpdateManyWithWhereWithoutEncounterMethodInput";
import { LocationAreaEncounterRateUpdateWithWhereUniqueWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateUpdateWithWhereUniqueWithoutEncounterMethodInput";
import { LocationAreaEncounterRateUpsertWithWhereUniqueWithoutEncounterMethodInput } from "../inputs/LocationAreaEncounterRateUpsertWithWhereUniqueWithoutEncounterMethodInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpdateManyWithoutEncounterMethodNestedInput", {})
export class LocationAreaEncounterRateUpdateManyWithoutEncounterMethodNestedInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateWithoutEncounterMethodInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRateCreateWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRateCreateOrConnectWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateUpsertWithWhereUniqueWithoutEncounterMethodInput], {
    nullable: true
  })
  upsert?: LocationAreaEncounterRateUpsertWithWhereUniqueWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRateCreateManyEncounterMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereUniqueInput], {
    nullable: true
  })
  set?: LocationAreaEncounterRateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationAreaEncounterRateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationAreaEncounterRateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaEncounterRateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateUpdateWithWhereUniqueWithoutEncounterMethodInput], {
    nullable: true
  })
  update?: LocationAreaEncounterRateUpdateWithWhereUniqueWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateUpdateManyWithWhereWithoutEncounterMethodInput], {
    nullable: true
  })
  updateMany?: LocationAreaEncounterRateUpdateManyWithWhereWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationAreaEncounterRateScalarWhereInput[] | undefined;
}

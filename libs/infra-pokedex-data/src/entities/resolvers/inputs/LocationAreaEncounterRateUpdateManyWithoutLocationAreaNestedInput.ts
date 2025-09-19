import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope } from "../inputs/LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope";
import { LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput";
import { LocationAreaEncounterRateCreateWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateCreateWithoutLocationAreaInput";
import { LocationAreaEncounterRateScalarWhereInput } from "../inputs/LocationAreaEncounterRateScalarWhereInput";
import { LocationAreaEncounterRateUpdateManyWithWhereWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateUpdateManyWithWhereWithoutLocationAreaInput";
import { LocationAreaEncounterRateUpdateWithWhereUniqueWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateUpdateWithWhereUniqueWithoutLocationAreaInput";
import { LocationAreaEncounterRateUpsertWithWhereUniqueWithoutLocationAreaInput } from "../inputs/LocationAreaEncounterRateUpsertWithWhereUniqueWithoutLocationAreaInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpdateManyWithoutLocationAreaNestedInput", {})
export class LocationAreaEncounterRateUpdateManyWithoutLocationAreaNestedInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateWithoutLocationAreaInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRateCreateWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRateCreateOrConnectWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateUpsertWithWhereUniqueWithoutLocationAreaInput], {
    nullable: true
  })
  upsert?: LocationAreaEncounterRateUpsertWithWhereUniqueWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRateCreateManyLocationAreaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateUpdateWithWhereUniqueWithoutLocationAreaInput], {
    nullable: true
  })
  update?: LocationAreaEncounterRateUpdateWithWhereUniqueWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateUpdateManyWithWhereWithoutLocationAreaInput], {
    nullable: true
  })
  updateMany?: LocationAreaEncounterRateUpdateManyWithWhereWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationAreaEncounterRateScalarWhereInput[] | undefined;
}

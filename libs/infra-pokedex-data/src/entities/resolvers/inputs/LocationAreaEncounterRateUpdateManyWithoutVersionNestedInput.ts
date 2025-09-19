import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateCreateManyVersionInputEnvelope } from "../inputs/LocationAreaEncounterRateCreateManyVersionInputEnvelope";
import { LocationAreaEncounterRateCreateOrConnectWithoutVersionInput } from "../inputs/LocationAreaEncounterRateCreateOrConnectWithoutVersionInput";
import { LocationAreaEncounterRateCreateWithoutVersionInput } from "../inputs/LocationAreaEncounterRateCreateWithoutVersionInput";
import { LocationAreaEncounterRateScalarWhereInput } from "../inputs/LocationAreaEncounterRateScalarWhereInput";
import { LocationAreaEncounterRateUpdateManyWithWhereWithoutVersionInput } from "../inputs/LocationAreaEncounterRateUpdateManyWithWhereWithoutVersionInput";
import { LocationAreaEncounterRateUpdateWithWhereUniqueWithoutVersionInput } from "../inputs/LocationAreaEncounterRateUpdateWithWhereUniqueWithoutVersionInput";
import { LocationAreaEncounterRateUpsertWithWhereUniqueWithoutVersionInput } from "../inputs/LocationAreaEncounterRateUpsertWithWhereUniqueWithoutVersionInput";
import { LocationAreaEncounterRateWhereUniqueInput } from "../inputs/LocationAreaEncounterRateWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaEncounterRateUpdateManyWithoutVersionNestedInput", {})
export class LocationAreaEncounterRateUpdateManyWithoutVersionNestedInput {
  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateWithoutVersionInput], {
    nullable: true
  })
  create?: LocationAreaEncounterRateCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaEncounterRateCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateUpsertWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  upsert?: LocationAreaEncounterRateUpsertWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaEncounterRateCreateManyVersionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateUpdateWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  update?: LocationAreaEncounterRateUpdateWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateUpdateManyWithWhereWithoutVersionInput], {
    nullable: true
  })
  updateMany?: LocationAreaEncounterRateUpdateManyWithWhereWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationAreaEncounterRateScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateManyVersionGroupInputEnvelope } from "../inputs/EncounterSlotCreateManyVersionGroupInputEnvelope";
import { EncounterSlotCreateOrConnectWithoutVersionGroupInput } from "../inputs/EncounterSlotCreateOrConnectWithoutVersionGroupInput";
import { EncounterSlotCreateWithoutVersionGroupInput } from "../inputs/EncounterSlotCreateWithoutVersionGroupInput";
import { EncounterSlotScalarWhereInput } from "../inputs/EncounterSlotScalarWhereInput";
import { EncounterSlotUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/EncounterSlotUpdateManyWithWhereWithoutVersionGroupInput";
import { EncounterSlotUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/EncounterSlotUpdateWithWhereUniqueWithoutVersionGroupInput";
import { EncounterSlotUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/EncounterSlotUpsertWithWhereUniqueWithoutVersionGroupInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotUpdateManyWithoutVersionGroupNestedInput", {})
export class EncounterSlotUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [EncounterSlotCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: EncounterSlotCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: EncounterSlotCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: EncounterSlotUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterSlotCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotWhereUniqueInput], {
    nullable: true
  })
  set?: EncounterSlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncounterSlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotWhereUniqueInput], {
    nullable: true
  })
  delete?: EncounterSlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterSlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: EncounterSlotUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: EncounterSlotUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterSlotScalarWhereInput[] | undefined;
}

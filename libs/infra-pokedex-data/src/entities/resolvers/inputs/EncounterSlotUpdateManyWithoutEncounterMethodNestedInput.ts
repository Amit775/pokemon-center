import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateManyEncounterMethodInputEnvelope } from "../inputs/EncounterSlotCreateManyEncounterMethodInputEnvelope";
import { EncounterSlotCreateOrConnectWithoutEncounterMethodInput } from "../inputs/EncounterSlotCreateOrConnectWithoutEncounterMethodInput";
import { EncounterSlotCreateWithoutEncounterMethodInput } from "../inputs/EncounterSlotCreateWithoutEncounterMethodInput";
import { EncounterSlotScalarWhereInput } from "../inputs/EncounterSlotScalarWhereInput";
import { EncounterSlotUpdateManyWithWhereWithoutEncounterMethodInput } from "../inputs/EncounterSlotUpdateManyWithWhereWithoutEncounterMethodInput";
import { EncounterSlotUpdateWithWhereUniqueWithoutEncounterMethodInput } from "../inputs/EncounterSlotUpdateWithWhereUniqueWithoutEncounterMethodInput";
import { EncounterSlotUpsertWithWhereUniqueWithoutEncounterMethodInput } from "../inputs/EncounterSlotUpsertWithWhereUniqueWithoutEncounterMethodInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotUpdateManyWithoutEncounterMethodNestedInput", {})
export class EncounterSlotUpdateManyWithoutEncounterMethodNestedInput {
  @TypeGraphQL.Field(_type => [EncounterSlotCreateWithoutEncounterMethodInput], {
    nullable: true
  })
  create?: EncounterSlotCreateWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotCreateOrConnectWithoutEncounterMethodInput], {
    nullable: true
  })
  connectOrCreate?: EncounterSlotCreateOrConnectWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotUpsertWithWhereUniqueWithoutEncounterMethodInput], {
    nullable: true
  })
  upsert?: EncounterSlotUpsertWithWhereUniqueWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotCreateManyEncounterMethodInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterSlotCreateManyEncounterMethodInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EncounterSlotUpdateWithWhereUniqueWithoutEncounterMethodInput], {
    nullable: true
  })
  update?: EncounterSlotUpdateWithWhereUniqueWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotUpdateManyWithWhereWithoutEncounterMethodInput], {
    nullable: true
  })
  updateMany?: EncounterSlotUpdateManyWithWhereWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterSlotScalarWhereInput[] | undefined;
}

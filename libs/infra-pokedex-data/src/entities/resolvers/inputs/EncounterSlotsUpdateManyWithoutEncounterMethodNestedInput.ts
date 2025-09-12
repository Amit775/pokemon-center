import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateManyEncounterMethodInputEnvelope } from "../inputs/EncounterSlotsCreateManyEncounterMethodInputEnvelope";
import { EncounterSlotsCreateOrConnectWithoutEncounterMethodInput } from "../inputs/EncounterSlotsCreateOrConnectWithoutEncounterMethodInput";
import { EncounterSlotsCreateWithoutEncounterMethodInput } from "../inputs/EncounterSlotsCreateWithoutEncounterMethodInput";
import { EncounterSlotsScalarWhereInput } from "../inputs/EncounterSlotsScalarWhereInput";
import { EncounterSlotsUpdateManyWithWhereWithoutEncounterMethodInput } from "../inputs/EncounterSlotsUpdateManyWithWhereWithoutEncounterMethodInput";
import { EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput } from "../inputs/EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput";
import { EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput } from "../inputs/EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsUpdateManyWithoutEncounterMethodNestedInput", {})
export class EncounterSlotsUpdateManyWithoutEncounterMethodNestedInput {
  @TypeGraphQL.Field(_type => [EncounterSlotsCreateWithoutEncounterMethodInput], {
    nullable: true
  })
  create?: EncounterSlotsCreateWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsCreateOrConnectWithoutEncounterMethodInput], {
    nullable: true
  })
  connectOrCreate?: EncounterSlotsCreateOrConnectWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput], {
    nullable: true
  })
  upsert?: EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateManyEncounterMethodInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterSlotsCreateManyEncounterMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsWhereUniqueInput], {
    nullable: true
  })
  set?: EncounterSlotsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncounterSlotsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsWhereUniqueInput], {
    nullable: true
  })
  delete?: EncounterSlotsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterSlotsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput], {
    nullable: true
  })
  update?: EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsUpdateManyWithWhereWithoutEncounterMethodInput], {
    nullable: true
  })
  updateMany?: EncounterSlotsUpdateManyWithWhereWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterSlotsScalarWhereInput[] | undefined;
}

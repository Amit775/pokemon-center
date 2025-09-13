import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateManyVersionGroupInputEnvelope } from "../inputs/EncounterSlotsCreateManyVersionGroupInputEnvelope";
import { EncounterSlotsCreateOrConnectWithoutVersionGroupInput } from "../inputs/EncounterSlotsCreateOrConnectWithoutVersionGroupInput";
import { EncounterSlotsCreateWithoutVersionGroupInput } from "../inputs/EncounterSlotsCreateWithoutVersionGroupInput";
import { EncounterSlotsScalarWhereInput } from "../inputs/EncounterSlotsScalarWhereInput";
import { EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput";
import { EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput";
import { EncounterSlotsUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/EncounterSlotsUpsertWithWhereUniqueWithoutVersionGroupInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsUpdateManyWithoutVersionGroupNestedInput", {})
export class EncounterSlotsUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [EncounterSlotsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: EncounterSlotsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: EncounterSlotsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: EncounterSlotsUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterSlotsCreateManyVersionGroupInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterSlotsScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyLocationAreaInputEnvelope } from "../inputs/EncounterCreateManyLocationAreaInputEnvelope";
import { EncounterCreateOrConnectWithoutLocationAreaInput } from "../inputs/EncounterCreateOrConnectWithoutLocationAreaInput";
import { EncounterCreateWithoutLocationAreaInput } from "../inputs/EncounterCreateWithoutLocationAreaInput";
import { EncounterScalarWhereInput } from "../inputs/EncounterScalarWhereInput";
import { EncounterUpdateManyWithWhereWithoutLocationAreaInput } from "../inputs/EncounterUpdateManyWithWhereWithoutLocationAreaInput";
import { EncounterUpdateWithWhereUniqueWithoutLocationAreaInput } from "../inputs/EncounterUpdateWithWhereUniqueWithoutLocationAreaInput";
import { EncounterUpsertWithWhereUniqueWithoutLocationAreaInput } from "../inputs/EncounterUpsertWithWhereUniqueWithoutLocationAreaInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpdateManyWithoutLocationAreaNestedInput", {})
export class EncounterUpdateManyWithoutLocationAreaNestedInput {
  @TypeGraphQL.Field(_type => [EncounterCreateWithoutLocationAreaInput], {
    nullable: true
  })
  create?: EncounterCreateWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterCreateOrConnectWithoutLocationAreaInput], {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpsertWithWhereUniqueWithoutLocationAreaInput], {
    nullable: true
  })
  upsert?: EncounterUpsertWithWhereUniqueWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateManyLocationAreaInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterCreateManyLocationAreaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  set?: EncounterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncounterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  delete?: EncounterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpdateWithWhereUniqueWithoutLocationAreaInput], {
    nullable: true
  })
  update?: EncounterUpdateWithWhereUniqueWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpdateManyWithWhereWithoutLocationAreaInput], {
    nullable: true
  })
  updateMany?: EncounterUpdateManyWithWhereWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterScalarWhereInput[] | undefined;
}

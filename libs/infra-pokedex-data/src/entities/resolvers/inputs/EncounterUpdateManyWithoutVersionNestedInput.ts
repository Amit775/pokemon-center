import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyVersionInputEnvelope } from "../inputs/EncounterCreateManyVersionInputEnvelope";
import { EncounterCreateOrConnectWithoutVersionInput } from "../inputs/EncounterCreateOrConnectWithoutVersionInput";
import { EncounterCreateWithoutVersionInput } from "../inputs/EncounterCreateWithoutVersionInput";
import { EncounterScalarWhereInput } from "../inputs/EncounterScalarWhereInput";
import { EncounterUpdateManyWithWhereWithoutVersionInput } from "../inputs/EncounterUpdateManyWithWhereWithoutVersionInput";
import { EncounterUpdateWithWhereUniqueWithoutVersionInput } from "../inputs/EncounterUpdateWithWhereUniqueWithoutVersionInput";
import { EncounterUpsertWithWhereUniqueWithoutVersionInput } from "../inputs/EncounterUpsertWithWhereUniqueWithoutVersionInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpdateManyWithoutVersionNestedInput", {})
export class EncounterUpdateManyWithoutVersionNestedInput {
  @TypeGraphQL.Field(_type => [EncounterCreateWithoutVersionInput], {
    nullable: true
  })
  create?: EncounterCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpsertWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  upsert?: EncounterUpsertWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterCreateManyVersionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EncounterUpdateWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  update?: EncounterUpdateWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpdateManyWithWhereWithoutVersionInput], {
    nullable: true
  })
  updateMany?: EncounterUpdateManyWithWhereWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyLocationAreaInputEnvelope } from "../inputs/EncountersCreateManyLocationAreaInputEnvelope";
import { EncountersCreateOrConnectWithoutLocationAreaInput } from "../inputs/EncountersCreateOrConnectWithoutLocationAreaInput";
import { EncountersCreateWithoutLocationAreaInput } from "../inputs/EncountersCreateWithoutLocationAreaInput";
import { EncountersScalarWhereInput } from "../inputs/EncountersScalarWhereInput";
import { EncountersUpdateManyWithWhereWithoutLocationAreaInput } from "../inputs/EncountersUpdateManyWithWhereWithoutLocationAreaInput";
import { EncountersUpdateWithWhereUniqueWithoutLocationAreaInput } from "../inputs/EncountersUpdateWithWhereUniqueWithoutLocationAreaInput";
import { EncountersUpsertWithWhereUniqueWithoutLocationAreaInput } from "../inputs/EncountersUpsertWithWhereUniqueWithoutLocationAreaInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpdateManyWithoutLocationAreaNestedInput", {})
export class EncountersUpdateManyWithoutLocationAreaNestedInput {
  @TypeGraphQL.Field(_type => [EncountersCreateWithoutLocationAreaInput], {
    nullable: true
  })
  create?: EncountersCreateWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersCreateOrConnectWithoutLocationAreaInput], {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpsertWithWhereUniqueWithoutLocationAreaInput], {
    nullable: true
  })
  upsert?: EncountersUpsertWithWhereUniqueWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateManyLocationAreaInputEnvelope, {
    nullable: true
  })
  createMany?: EncountersCreateManyLocationAreaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  set?: EncountersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncountersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  delete?: EncountersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  connect?: EncountersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpdateWithWhereUniqueWithoutLocationAreaInput], {
    nullable: true
  })
  update?: EncountersUpdateWithWhereUniqueWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpdateManyWithWhereWithoutLocationAreaInput], {
    nullable: true
  })
  updateMany?: EncountersUpdateManyWithWhereWithoutLocationAreaInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncountersScalarWhereInput[] | undefined;
}

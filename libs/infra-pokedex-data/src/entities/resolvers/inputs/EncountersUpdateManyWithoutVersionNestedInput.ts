import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyVersionInputEnvelope } from "../inputs/EncountersCreateManyVersionInputEnvelope";
import { EncountersCreateOrConnectWithoutVersionInput } from "../inputs/EncountersCreateOrConnectWithoutVersionInput";
import { EncountersCreateWithoutVersionInput } from "../inputs/EncountersCreateWithoutVersionInput";
import { EncountersScalarWhereInput } from "../inputs/EncountersScalarWhereInput";
import { EncountersUpdateManyWithWhereWithoutVersionInput } from "../inputs/EncountersUpdateManyWithWhereWithoutVersionInput";
import { EncountersUpdateWithWhereUniqueWithoutVersionInput } from "../inputs/EncountersUpdateWithWhereUniqueWithoutVersionInput";
import { EncountersUpsertWithWhereUniqueWithoutVersionInput } from "../inputs/EncountersUpsertWithWhereUniqueWithoutVersionInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpdateManyWithoutVersionNestedInput", {})
export class EncountersUpdateManyWithoutVersionNestedInput {
  @TypeGraphQL.Field(_type => [EncountersCreateWithoutVersionInput], {
    nullable: true
  })
  create?: EncountersCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpsertWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  upsert?: EncountersUpsertWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: EncountersCreateManyVersionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EncountersUpdateWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  update?: EncountersUpdateWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpdateManyWithWhereWithoutVersionInput], {
    nullable: true
  })
  updateMany?: EncountersUpdateManyWithWhereWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncountersScalarWhereInput[] | undefined;
}

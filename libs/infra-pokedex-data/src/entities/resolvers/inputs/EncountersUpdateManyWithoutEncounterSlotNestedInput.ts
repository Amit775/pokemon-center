import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyEncounterSlotInputEnvelope } from "../inputs/EncountersCreateManyEncounterSlotInputEnvelope";
import { EncountersCreateOrConnectWithoutEncounterSlotInput } from "../inputs/EncountersCreateOrConnectWithoutEncounterSlotInput";
import { EncountersCreateWithoutEncounterSlotInput } from "../inputs/EncountersCreateWithoutEncounterSlotInput";
import { EncountersScalarWhereInput } from "../inputs/EncountersScalarWhereInput";
import { EncountersUpdateManyWithWhereWithoutEncounterSlotInput } from "../inputs/EncountersUpdateManyWithWhereWithoutEncounterSlotInput";
import { EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput } from "../inputs/EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput";
import { EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput } from "../inputs/EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersUpdateManyWithoutEncounterSlotNestedInput", {})
export class EncountersUpdateManyWithoutEncounterSlotNestedInput {
  @TypeGraphQL.Field(_type => [EncountersCreateWithoutEncounterSlotInput], {
    nullable: true
  })
  create?: EncountersCreateWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersCreateOrConnectWithoutEncounterSlotInput], {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput], {
    nullable: true
  })
  upsert?: EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateManyEncounterSlotInputEnvelope, {
    nullable: true
  })
  createMany?: EncountersCreateManyEncounterSlotInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput], {
    nullable: true
  })
  update?: EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersUpdateManyWithWhereWithoutEncounterSlotInput], {
    nullable: true
  })
  updateMany?: EncountersUpdateManyWithWhereWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncountersScalarWhereInput[] | undefined;
}

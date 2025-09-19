import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyEncounterSlotInputEnvelope } from "../inputs/EncounterCreateManyEncounterSlotInputEnvelope";
import { EncounterCreateOrConnectWithoutEncounterSlotInput } from "../inputs/EncounterCreateOrConnectWithoutEncounterSlotInput";
import { EncounterCreateWithoutEncounterSlotInput } from "../inputs/EncounterCreateWithoutEncounterSlotInput";
import { EncounterScalarWhereInput } from "../inputs/EncounterScalarWhereInput";
import { EncounterUpdateManyWithWhereWithoutEncounterSlotInput } from "../inputs/EncounterUpdateManyWithWhereWithoutEncounterSlotInput";
import { EncounterUpdateWithWhereUniqueWithoutEncounterSlotInput } from "../inputs/EncounterUpdateWithWhereUniqueWithoutEncounterSlotInput";
import { EncounterUpsertWithWhereUniqueWithoutEncounterSlotInput } from "../inputs/EncounterUpsertWithWhereUniqueWithoutEncounterSlotInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterUpdateManyWithoutEncounterSlotNestedInput", {})
export class EncounterUpdateManyWithoutEncounterSlotNestedInput {
  @TypeGraphQL.Field(_type => [EncounterCreateWithoutEncounterSlotInput], {
    nullable: true
  })
  create?: EncounterCreateWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterCreateOrConnectWithoutEncounterSlotInput], {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpsertWithWhereUniqueWithoutEncounterSlotInput], {
    nullable: true
  })
  upsert?: EncounterUpsertWithWhereUniqueWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateManyEncounterSlotInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterCreateManyEncounterSlotInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EncounterUpdateWithWhereUniqueWithoutEncounterSlotInput], {
    nullable: true
  })
  update?: EncounterUpdateWithWhereUniqueWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterUpdateManyWithWhereWithoutEncounterSlotInput], {
    nullable: true
  })
  updateMany?: EncounterUpdateManyWithWhereWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterScalarWhereInput[] | undefined;
}

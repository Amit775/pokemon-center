import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateManyEncounterInputEnvelope } from "../inputs/EncounterConditionValueMapCreateManyEncounterInputEnvelope";
import { EncounterConditionValueMapCreateOrConnectWithoutEncounterInput } from "../inputs/EncounterConditionValueMapCreateOrConnectWithoutEncounterInput";
import { EncounterConditionValueMapCreateWithoutEncounterInput } from "../inputs/EncounterConditionValueMapCreateWithoutEncounterInput";
import { EncounterConditionValueMapScalarWhereInput } from "../inputs/EncounterConditionValueMapScalarWhereInput";
import { EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput } from "../inputs/EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput";
import { EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput } from "../inputs/EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput";
import { EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput } from "../inputs/EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput", {})
export class EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateWithoutEncounterInput], {
    nullable: true
  })
  create?: EncounterConditionValueMapCreateWithoutEncounterInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateOrConnectWithoutEncounterInput], {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValueMapCreateOrConnectWithoutEncounterInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput], {
    nullable: true
  })
  upsert?: EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateManyEncounterInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterConditionValueMapCreateManyEncounterInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  set?: EncounterConditionValueMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncounterConditionValueMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  delete?: EncounterConditionValueMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterConditionValueMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput], {
    nullable: true
  })
  update?: EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput], {
    nullable: true
  })
  updateMany?: EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterConditionValueMapScalarWhereInput[] | undefined;
}

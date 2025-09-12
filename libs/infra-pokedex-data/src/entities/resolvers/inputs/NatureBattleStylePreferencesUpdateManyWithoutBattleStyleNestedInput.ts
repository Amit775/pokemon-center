import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope } from "../inputs/NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope";
import { NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput";
import { NatureBattleStylePreferencesCreateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesCreateWithoutBattleStyleInput";
import { NatureBattleStylePreferencesScalarWhereInput } from "../inputs/NatureBattleStylePreferencesScalarWhereInput";
import { NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput";
import { NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput";
import { NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput", {})
export class NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateWithoutBattleStyleInput], {
    nullable: true
  })
  create?: NatureBattleStylePreferencesCreateWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput], {
    nullable: true
  })
  connectOrCreate?: NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput], {
    nullable: true
  })
  upsert?: NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope, {
    nullable: true
  })
  createMany?: NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  set?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  delete?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput], {
    nullable: true
  })
  update?: NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput], {
    nullable: true
  })
  updateMany?: NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NatureBattleStylePreferencesScalarWhereInput[] | undefined;
}

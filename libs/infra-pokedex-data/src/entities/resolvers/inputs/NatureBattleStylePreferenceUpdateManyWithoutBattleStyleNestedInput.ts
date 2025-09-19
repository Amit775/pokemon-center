import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope } from "../inputs/NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope";
import { NatureBattleStylePreferenceCreateOrConnectWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceCreateOrConnectWithoutBattleStyleInput";
import { NatureBattleStylePreferenceCreateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceCreateWithoutBattleStyleInput";
import { NatureBattleStylePreferenceScalarWhereInput } from "../inputs/NatureBattleStylePreferenceScalarWhereInput";
import { NatureBattleStylePreferenceUpdateManyWithWhereWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceUpdateManyWithWhereWithoutBattleStyleInput";
import { NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutBattleStyleInput";
import { NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutBattleStyleInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpdateManyWithoutBattleStyleNestedInput", {})
export class NatureBattleStylePreferenceUpdateManyWithoutBattleStyleNestedInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateWithoutBattleStyleInput], {
    nullable: true
  })
  create?: NatureBattleStylePreferenceCreateWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceCreateOrConnectWithoutBattleStyleInput], {
    nullable: true
  })
  connectOrCreate?: NatureBattleStylePreferenceCreateOrConnectWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutBattleStyleInput], {
    nullable: true
  })
  upsert?: NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope, {
    nullable: true
  })
  createMany?: NatureBattleStylePreferenceCreateManyBattleStyleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  set?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  delete?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureBattleStylePreferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutBattleStyleInput], {
    nullable: true
  })
  update?: NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceUpdateManyWithWhereWithoutBattleStyleInput], {
    nullable: true
  })
  updateMany?: NatureBattleStylePreferenceUpdateManyWithWhereWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NatureBattleStylePreferenceScalarWhereInput[] | undefined;
}

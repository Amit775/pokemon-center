import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope } from "../inputs/NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope";
import { NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput";
import { NatureBattleStylePreferencesCreateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesCreateWithoutBattleStyleInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput", {})
export class NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateWithoutBattleStyleInput], {
    nullable: true
  })
  create?: NatureBattleStylePreferencesCreateWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput], {
    nullable: true
  })
  connectOrCreate?: NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope, {
    nullable: true
  })
  createMany?: NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesWhereUniqueInput], {
    nullable: true
  })
  connect?: NatureBattleStylePreferencesWhereUniqueInput[] | undefined;
}

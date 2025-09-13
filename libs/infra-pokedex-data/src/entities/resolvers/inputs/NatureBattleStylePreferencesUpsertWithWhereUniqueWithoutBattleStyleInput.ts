import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesCreateWithoutBattleStyleInput";
import { NatureBattleStylePreferencesUpdateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesUpdateWithoutBattleStyleInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput", {})
export class NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateWithoutBattleStyleInput, {
    nullable: false
  })
  update!: NatureBattleStylePreferencesUpdateWithoutBattleStyleInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateWithoutBattleStyleInput, {
    nullable: false
  })
  create!: NatureBattleStylePreferencesCreateWithoutBattleStyleInput;
}

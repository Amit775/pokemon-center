import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesUpdateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesUpdateWithoutBattleStyleInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput", {})
export class NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateWithoutBattleStyleInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferencesUpdateWithoutBattleStyleInput;
}

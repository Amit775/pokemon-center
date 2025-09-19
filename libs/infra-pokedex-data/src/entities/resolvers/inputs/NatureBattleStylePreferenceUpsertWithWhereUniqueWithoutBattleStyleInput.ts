import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceCreateWithoutBattleStyleInput";
import { NatureBattleStylePreferenceUpdateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceUpdateWithoutBattleStyleInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutBattleStyleInput", {})
export class NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateWithoutBattleStyleInput, {
    nullable: false
  })
  update!: NatureBattleStylePreferenceUpdateWithoutBattleStyleInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateWithoutBattleStyleInput, {
    nullable: false
  })
  create!: NatureBattleStylePreferenceCreateWithoutBattleStyleInput;
}

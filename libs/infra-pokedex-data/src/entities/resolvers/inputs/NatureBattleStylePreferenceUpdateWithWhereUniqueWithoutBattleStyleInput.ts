import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceUpdateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceUpdateWithoutBattleStyleInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutBattleStyleInput", {})
export class NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateWithoutBattleStyleInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferenceUpdateWithoutBattleStyleInput;
}

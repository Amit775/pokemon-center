import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesCreateWithoutBattleStyleInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput", {})
export class NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateWithoutBattleStyleInput, {
    nullable: false
  })
  create!: NatureBattleStylePreferencesCreateWithoutBattleStyleInput;
}

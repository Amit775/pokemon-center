import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateNestedOneWithoutBattleStylePreferencesInput } from "../inputs/NatureCreateNestedOneWithoutBattleStylePreferencesInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceCreateWithoutBattleStyleInput", {})
export class NatureBattleStylePreferenceCreateWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  low_hp_preference!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  high_hp_preference!: number;

  @TypeGraphQL.Field(_type => NatureCreateNestedOneWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  nature!: NatureCreateNestedOneWithoutBattleStylePreferencesInput;
}

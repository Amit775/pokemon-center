import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput";
import { NatureCreateNestedOneWithoutBattleStylePreferencesInput } from "../inputs/NatureCreateNestedOneWithoutBattleStylePreferencesInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceCreateInput", {})
export class NatureBattleStylePreferenceCreateInput {
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

  @TypeGraphQL.Field(_type => MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput, {
    nullable: false
  })
  battleStyle!: MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput } from "../inputs/MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput";
import { NaturesCreateNestedOneWithoutBattleStylePreferencesInput } from "../inputs/NaturesCreateNestedOneWithoutBattleStylePreferencesInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesCreateInput", {})
export class NatureBattleStylePreferencesCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  low_hp_preference!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  high_hp_preference!: number;

  @TypeGraphQL.Field(_type => NaturesCreateNestedOneWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  nature!: NaturesCreateNestedOneWithoutBattleStylePreferencesInput;

  @TypeGraphQL.Field(_type => MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput, {
    nullable: false
  })
  battleStyle!: MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput;
}

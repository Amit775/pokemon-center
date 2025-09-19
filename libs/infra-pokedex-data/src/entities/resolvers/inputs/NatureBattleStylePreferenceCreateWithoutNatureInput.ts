import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceCreateWithoutNatureInput", {})
export class NatureBattleStylePreferenceCreateWithoutNatureInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  low_hp_preference!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  high_hp_preference!: number;

  @TypeGraphQL.Field(_type => MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput, {
    nullable: false
  })
  battleStyle!: MoveBattleStyleCreateNestedOneWithoutNaturePreferencesInput;
}

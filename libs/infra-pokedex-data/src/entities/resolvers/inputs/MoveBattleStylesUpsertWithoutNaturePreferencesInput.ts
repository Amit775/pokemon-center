import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesCreateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStylesCreateWithoutNaturePreferencesInput";
import { MoveBattleStylesUpdateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStylesUpdateWithoutNaturePreferencesInput";
import { MoveBattleStylesWhereInput } from "../inputs/MoveBattleStylesWhereInput";

@TypeGraphQL.InputType("MoveBattleStylesUpsertWithoutNaturePreferencesInput", {})
export class MoveBattleStylesUpsertWithoutNaturePreferencesInput {
  @TypeGraphQL.Field(_type => MoveBattleStylesUpdateWithoutNaturePreferencesInput, {
    nullable: false
  })
  update!: MoveBattleStylesUpdateWithoutNaturePreferencesInput;

  @TypeGraphQL.Field(_type => MoveBattleStylesCreateWithoutNaturePreferencesInput, {
    nullable: false
  })
  create!: MoveBattleStylesCreateWithoutNaturePreferencesInput;

  @TypeGraphQL.Field(_type => MoveBattleStylesWhereInput, {
    nullable: true
  })
  where?: MoveBattleStylesWhereInput | undefined;
}

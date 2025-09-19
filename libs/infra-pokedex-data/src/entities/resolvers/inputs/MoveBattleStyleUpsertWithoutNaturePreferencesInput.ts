import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleCreateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleCreateWithoutNaturePreferencesInput";
import { MoveBattleStyleUpdateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleUpdateWithoutNaturePreferencesInput";
import { MoveBattleStyleWhereInput } from "../inputs/MoveBattleStyleWhereInput";

@TypeGraphQL.InputType("MoveBattleStyleUpsertWithoutNaturePreferencesInput", {})
export class MoveBattleStyleUpsertWithoutNaturePreferencesInput {
  @TypeGraphQL.Field(_type => MoveBattleStyleUpdateWithoutNaturePreferencesInput, {
    nullable: false
  })
  update!: MoveBattleStyleUpdateWithoutNaturePreferencesInput;

  @TypeGraphQL.Field(_type => MoveBattleStyleCreateWithoutNaturePreferencesInput, {
    nullable: false
  })
  create!: MoveBattleStyleCreateWithoutNaturePreferencesInput;

  @TypeGraphQL.Field(_type => MoveBattleStyleWhereInput, {
    nullable: true
  })
  where?: MoveBattleStyleWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateWithoutBattleStylePreferencesInput } from "../inputs/NatureCreateWithoutBattleStylePreferencesInput";
import { NatureUpdateWithoutBattleStylePreferencesInput } from "../inputs/NatureUpdateWithoutBattleStylePreferencesInput";
import { NatureWhereInput } from "../inputs/NatureWhereInput";

@TypeGraphQL.InputType("NatureUpsertWithoutBattleStylePreferencesInput", {})
export class NatureUpsertWithoutBattleStylePreferencesInput {
  @TypeGraphQL.Field(_type => NatureUpdateWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  update!: NatureUpdateWithoutBattleStylePreferencesInput;

  @TypeGraphQL.Field(_type => NatureCreateWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  create!: NatureCreateWithoutBattleStylePreferencesInput;

  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  where?: NatureWhereInput | undefined;
}

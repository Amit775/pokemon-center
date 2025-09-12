import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesCreateWithoutNatureInput";
import { NatureBattleStylePreferencesUpdateWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesUpdateWithoutNatureInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput", {})
export class NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateWithoutNatureInput, {
    nullable: false
  })
  update!: NatureBattleStylePreferencesUpdateWithoutNatureInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateWithoutNatureInput, {
    nullable: false
  })
  create!: NatureBattleStylePreferencesCreateWithoutNatureInput;
}

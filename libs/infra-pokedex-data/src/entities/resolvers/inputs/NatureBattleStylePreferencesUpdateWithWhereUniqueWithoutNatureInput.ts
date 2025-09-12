import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesUpdateWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesUpdateWithoutNatureInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput", {})
export class NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateWithoutNatureInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferencesUpdateWithoutNatureInput;
}

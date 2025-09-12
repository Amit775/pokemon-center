import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateWithoutNatureInput } from "../inputs/NatureBattleStylePreferencesCreateWithoutNatureInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput", {})
export class NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateWithoutNatureInput, {
    nullable: false
  })
  create!: NatureBattleStylePreferencesCreateWithoutNatureInput;
}

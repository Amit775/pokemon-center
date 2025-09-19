import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceCreateWithoutNatureInput";
import { NatureBattleStylePreferenceUpdateWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceUpdateWithoutNatureInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutNatureInput", {})
export class NatureBattleStylePreferenceUpsertWithWhereUniqueWithoutNatureInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateWithoutNatureInput, {
    nullable: false
  })
  update!: NatureBattleStylePreferenceUpdateWithoutNatureInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateWithoutNatureInput, {
    nullable: false
  })
  create!: NatureBattleStylePreferenceCreateWithoutNatureInput;
}

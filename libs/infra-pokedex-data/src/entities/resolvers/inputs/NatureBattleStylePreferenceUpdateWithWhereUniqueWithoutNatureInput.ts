import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceUpdateWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceUpdateWithoutNatureInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutNatureInput", {})
export class NatureBattleStylePreferenceUpdateWithWhereUniqueWithoutNatureInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateWithoutNatureInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferenceUpdateWithoutNatureInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateWithoutNatureInput } from "../inputs/NatureBattleStylePreferenceCreateWithoutNatureInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput", {})
export class NatureBattleStylePreferenceCreateOrConnectWithoutNatureInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateWithoutNatureInput, {
    nullable: false
  })
  create!: NatureBattleStylePreferenceCreateWithoutNatureInput;
}

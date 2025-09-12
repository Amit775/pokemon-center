import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesScalarWhereInput } from "../inputs/NatureBattleStylePreferencesScalarWhereInput";
import { NatureBattleStylePreferencesUpdateManyMutationInput } from "../inputs/NatureBattleStylePreferencesUpdateManyMutationInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput", {})
export class NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesScalarWhereInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesScalarWhereInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateManyMutationInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferencesUpdateManyMutationInput;
}

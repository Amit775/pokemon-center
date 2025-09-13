import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput } from "../inputs/NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput";

@TypeGraphQL.InputType("MoveBattleStylesUpdateInput", {})
export class MoveBattleStylesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput, {
    nullable: true
  })
  naturePreferences?: NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput | undefined;
}

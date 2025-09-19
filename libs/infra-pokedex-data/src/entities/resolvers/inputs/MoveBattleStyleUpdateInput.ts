import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceUpdateManyWithoutBattleStyleNestedInput } from "../inputs/NatureBattleStylePreferenceUpdateManyWithoutBattleStyleNestedInput";

@TypeGraphQL.InputType("MoveBattleStyleUpdateInput", {})
export class MoveBattleStyleUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateManyWithoutBattleStyleNestedInput, {
    nullable: true
  })
  naturePreferences?: NatureBattleStylePreferenceUpdateManyWithoutBattleStyleNestedInput | undefined;
}

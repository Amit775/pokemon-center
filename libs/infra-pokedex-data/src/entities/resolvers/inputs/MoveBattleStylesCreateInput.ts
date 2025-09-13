import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput";

@TypeGraphQL.InputType("MoveBattleStylesCreateInput", {})
export class MoveBattleStylesCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput, {
    nullable: true
  })
  naturePreferences?: NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput | undefined;
}

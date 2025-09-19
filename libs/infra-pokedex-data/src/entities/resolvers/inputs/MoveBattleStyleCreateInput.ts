import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceCreateNestedManyWithoutBattleStyleInput } from "../inputs/NatureBattleStylePreferenceCreateNestedManyWithoutBattleStyleInput";

@TypeGraphQL.InputType("MoveBattleStyleCreateInput", {})
export class MoveBattleStyleCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateNestedManyWithoutBattleStyleInput, {
    nullable: true
  })
  naturePreferences?: NatureBattleStylePreferenceCreateNestedManyWithoutBattleStyleInput | undefined;
}

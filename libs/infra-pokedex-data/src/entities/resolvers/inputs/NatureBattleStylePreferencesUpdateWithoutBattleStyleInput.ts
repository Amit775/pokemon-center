import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput } from "../inputs/NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpdateWithoutBattleStyleInput", {})
export class NatureBattleStylePreferencesUpdateWithoutBattleStyleInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  low_hp_preference?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  high_hp_preference?: number | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput, {
    nullable: true
  })
  nature?: NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput | undefined;
}

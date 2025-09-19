import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceUpdateManyWithoutNatureNestedInput } from "../inputs/NatureBattleStylePreferenceUpdateManyWithoutNatureNestedInput";
import { StatUpdateOneRequiredWithoutNaturesIncreasedNestedInput } from "../inputs/StatUpdateOneRequiredWithoutNaturesIncreasedNestedInput";
import { StatUpdateOneRequiredWithoutNaturesNestedInput } from "../inputs/StatUpdateOneRequiredWithoutNaturesNestedInput";
import { TypeUpdateManyWithoutNaturesNestedInput } from "../inputs/TypeUpdateManyWithoutNaturesNestedInput";

@TypeGraphQL.InputType("NatureUpdateWithoutIncreasedStatTypesInput", {})
export class NatureUpdateWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  hates_flavor_id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  likes_flavor_id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => StatUpdateOneRequiredWithoutNaturesNestedInput, {
    nullable: true
  })
  decreasedStat?: StatUpdateOneRequiredWithoutNaturesNestedInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateOneRequiredWithoutNaturesIncreasedNestedInput, {
    nullable: true
  })
  increasedStat?: StatUpdateOneRequiredWithoutNaturesIncreasedNestedInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateManyWithoutNatureNestedInput, {
    nullable: true
  })
  battleStylePreferences?: NatureBattleStylePreferenceUpdateManyWithoutNatureNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateManyWithoutNaturesNestedInput, {
    nullable: true
  })
  decreasedStatTypes?: TypeUpdateManyWithoutNaturesNestedInput | undefined;
}

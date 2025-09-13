import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput } from "../inputs/NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput";
import { StatsUpdateOneRequiredWithoutNaturesNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutNaturesNestedInput";
import { TypesUpdateManyWithoutNaturesIncreasedNestedInput } from "../inputs/TypesUpdateManyWithoutNaturesIncreasedNestedInput";
import { TypesUpdateManyWithoutNaturesNestedInput } from "../inputs/TypesUpdateManyWithoutNaturesNestedInput";

@TypeGraphQL.InputType("NaturesUpdateWithoutIncreasedStatInput", {})
export class NaturesUpdateWithoutIncreasedStatInput {
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

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutNaturesNestedInput, {
    nullable: true
  })
  decreasedStat?: StatsUpdateOneRequiredWithoutNaturesNestedInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput, {
    nullable: true
  })
  battleStylePreferences?: NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateManyWithoutNaturesNestedInput, {
    nullable: true
  })
  decreasedStatTypes?: TypesUpdateManyWithoutNaturesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateManyWithoutNaturesIncreasedNestedInput, {
    nullable: true
  })
  increasedStatTypes?: TypesUpdateManyWithoutNaturesIncreasedNestedInput | undefined;
}

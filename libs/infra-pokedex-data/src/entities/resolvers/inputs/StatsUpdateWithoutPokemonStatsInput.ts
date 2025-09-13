import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsUpdateManyWithoutStatNestedInput } from "../inputs/CharacteristicsUpdateManyWithoutStatNestedInput";
import { MoveMetaStatChangesUpdateManyWithoutStatNestedInput } from "../inputs/MoveMetaStatChangesUpdateManyWithoutStatNestedInput";
import { NaturesUpdateManyWithoutDecreasedStatNestedInput } from "../inputs/NaturesUpdateManyWithoutDecreasedStatNestedInput";
import { NaturesUpdateManyWithoutIncreasedStatNestedInput } from "../inputs/NaturesUpdateManyWithoutIncreasedStatNestedInput";

@TypeGraphQL.InputType("StatsUpdateWithoutPokemonStatsInput", {})
export class StatsUpdateWithoutPokemonStatsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_class_id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_battle_only?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateManyWithoutStatNestedInput, {
    nullable: true
  })
  moveMetaStatChanges?: MoveMetaStatChangesUpdateManyWithoutStatNestedInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsUpdateManyWithoutStatNestedInput, {
    nullable: true
  })
  characteristics?: CharacteristicsUpdateManyWithoutStatNestedInput | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateManyWithoutDecreasedStatNestedInput, {
    nullable: true
  })
  natures?: NaturesUpdateManyWithoutDecreasedStatNestedInput | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateManyWithoutIncreasedStatNestedInput, {
    nullable: true
  })
  naturesIncreased?: NaturesUpdateManyWithoutIncreasedStatNestedInput | undefined;
}

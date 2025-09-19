import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicUpdateManyWithoutStatNestedInput } from "../inputs/CharacteristicUpdateManyWithoutStatNestedInput";
import { MoveMetaStatChangesUpdateManyWithoutStatNestedInput } from "../inputs/MoveMetaStatChangesUpdateManyWithoutStatNestedInput";
import { NatureUpdateManyWithoutDecreasedStatNestedInput } from "../inputs/NatureUpdateManyWithoutDecreasedStatNestedInput";
import { NatureUpdateManyWithoutIncreasedStatNestedInput } from "../inputs/NatureUpdateManyWithoutIncreasedStatNestedInput";

@TypeGraphQL.InputType("StatUpdateWithoutPokemonStatsInput", {})
export class StatUpdateWithoutPokemonStatsInput {
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

  @TypeGraphQL.Field(_type => CharacteristicUpdateManyWithoutStatNestedInput, {
    nullable: true
  })
  characteristics?: CharacteristicUpdateManyWithoutStatNestedInput | undefined;

  @TypeGraphQL.Field(_type => NatureUpdateManyWithoutDecreasedStatNestedInput, {
    nullable: true
  })
  natures?: NatureUpdateManyWithoutDecreasedStatNestedInput | undefined;

  @TypeGraphQL.Field(_type => NatureUpdateManyWithoutIncreasedStatNestedInput, {
    nullable: true
  })
  naturesIncreased?: NatureUpdateManyWithoutIncreasedStatNestedInput | undefined;
}

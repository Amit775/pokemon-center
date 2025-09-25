import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboUpdateManyWithoutFirstMoveNestedInput } from "../inputs/ContestComboUpdateManyWithoutFirstMoveNestedInput";
import { ContestComboUpdateManyWithoutSecondMoveNestedInput } from "../inputs/ContestComboUpdateManyWithoutSecondMoveNestedInput";
import { ContestEffectUpdateOneWithoutMovesNestedInput } from "../inputs/ContestEffectUpdateOneWithoutMovesNestedInput";
import { ContestTypeUpdateOneWithoutMovesNestedInput } from "../inputs/ContestTypeUpdateOneWithoutMovesNestedInput";
import { GenerationUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutMovesNestedInput";
import { MachineUpdateManyWithoutMoveNestedInput } from "../inputs/MachineUpdateManyWithoutMoveNestedInput";
import { MoveDamageClassUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/MoveDamageClassUpdateOneRequiredWithoutMovesNestedInput";
import { MoveEffectUpdateOneWithoutMovesNestedInput } from "../inputs/MoveEffectUpdateOneWithoutMovesNestedInput";
import { MoveMetaUpdateManyWithoutMoveNestedInput } from "../inputs/MoveMetaUpdateManyWithoutMoveNestedInput";
import { MoveTargetUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/MoveTargetUpdateOneRequiredWithoutMovesNestedInput";
import { PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput";
import { PokemonMoveUpdateManyWithoutMoveNestedInput } from "../inputs/PokemonMoveUpdateManyWithoutMoveNestedInput";
import { SuperContestComboUpdateManyWithoutFirstMoveNestedInput } from "../inputs/SuperContestComboUpdateManyWithoutFirstMoveNestedInput";
import { SuperContestComboUpdateManyWithoutSecondMoveNestedInput } from "../inputs/SuperContestComboUpdateManyWithoutSecondMoveNestedInput";
import { SuperContestEffectUpdateOneWithoutMovesNestedInput } from "../inputs/SuperContestEffectUpdateOneWithoutMovesNestedInput";
import { TypeUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutMovesNestedInput";

@TypeGraphQL.InputType("MoveUpdateWithoutFlagMapInput", {})
export class MoveUpdateWithoutFlagMapInput {
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
  power?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  accuracy?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priority?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effect_chance?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutMovesNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutMovesNestedInput, {
    nullable: true
  })
  type?: TypeUpdateOneRequiredWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetUpdateOneRequiredWithoutMovesNestedInput, {
    nullable: true
  })
  target?: MoveTargetUpdateOneRequiredWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassUpdateOneRequiredWithoutMovesNestedInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassUpdateOneRequiredWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectUpdateOneWithoutMovesNestedInput, {
    nullable: true
  })
  effect?: MoveEffectUpdateOneWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeUpdateOneWithoutMovesNestedInput, {
    nullable: true
  })
  contestType?: ContestTypeUpdateOneWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectUpdateOneWithoutMovesNestedInput, {
    nullable: true
  })
  contestEffect?: ContestEffectUpdateOneWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectUpdateOneWithoutMovesNestedInput, {
    nullable: true
  })
  superContestEffect?: SuperContestEffectUpdateOneWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateManyWithoutMoveNestedInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveUpdateManyWithoutMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => MachineUpdateManyWithoutMoveNestedInput, {
    nullable: true
  })
  machines?: MachineUpdateManyWithoutMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaUpdateManyWithoutMoveNestedInput, {
    nullable: true
  })
  meta?: MoveMetaUpdateManyWithoutMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboUpdateManyWithoutFirstMoveNestedInput, {
    nullable: true
  })
  contestCombos?: ContestComboUpdateManyWithoutFirstMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboUpdateManyWithoutSecondMoveNestedInput, {
    nullable: true
  })
  contestCombosSecond?: ContestComboUpdateManyWithoutSecondMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboUpdateManyWithoutFirstMoveNestedInput, {
    nullable: true
  })
  superContestCombos?: SuperContestComboUpdateManyWithoutFirstMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboUpdateManyWithoutSecondMoveNestedInput, {
    nullable: true
  })
  superContestCombosSecond?: SuperContestComboUpdateManyWithoutSecondMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput, {
    nullable: true
  })
  knownMoves?: PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput | undefined;
}

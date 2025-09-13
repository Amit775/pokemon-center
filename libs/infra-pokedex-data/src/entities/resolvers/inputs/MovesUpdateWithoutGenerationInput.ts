import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosUpdateManyWithoutFirstMoveNestedInput } from "../inputs/ContestCombosUpdateManyWithoutFirstMoveNestedInput";
import { ContestCombosUpdateManyWithoutSecondMoveNestedInput } from "../inputs/ContestCombosUpdateManyWithoutSecondMoveNestedInput";
import { ContestEffectsUpdateOneWithoutMovesNestedInput } from "../inputs/ContestEffectsUpdateOneWithoutMovesNestedInput";
import { ContestTypesUpdateOneWithoutMovesNestedInput } from "../inputs/ContestTypesUpdateOneWithoutMovesNestedInput";
import { MachinesUpdateManyWithoutMoveNestedInput } from "../inputs/MachinesUpdateManyWithoutMoveNestedInput";
import { MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput";
import { MoveEffectsUpdateOneWithoutMovesNestedInput } from "../inputs/MoveEffectsUpdateOneWithoutMovesNestedInput";
import { MoveFlagMapUpdateManyWithoutMoveNestedInput } from "../inputs/MoveFlagMapUpdateManyWithoutMoveNestedInput";
import { MoveMetaStatChangesUpdateManyWithoutMoveNestedInput } from "../inputs/MoveMetaStatChangesUpdateManyWithoutMoveNestedInput";
import { MoveMetaUpdateManyWithoutMoveNestedInput } from "../inputs/MoveMetaUpdateManyWithoutMoveNestedInput";
import { MoveTargetsUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/MoveTargetsUpdateOneRequiredWithoutMovesNestedInput";
import { PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput";
import { PokemonMovesUpdateManyWithoutMoveNestedInput } from "../inputs/PokemonMovesUpdateManyWithoutMoveNestedInput";
import { SuperContestCombosUpdateManyWithoutFirstMoveNestedInput } from "../inputs/SuperContestCombosUpdateManyWithoutFirstMoveNestedInput";
import { SuperContestCombosUpdateManyWithoutSecondMoveNestedInput } from "../inputs/SuperContestCombosUpdateManyWithoutSecondMoveNestedInput";
import { SuperContestEffectsUpdateOneWithoutMovesNestedInput } from "../inputs/SuperContestEffectsUpdateOneWithoutMovesNestedInput";
import { TypesUpdateOneRequiredWithoutMovesNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutMovesNestedInput";

@TypeGraphQL.InputType("MovesUpdateWithoutGenerationInput", {})
export class MovesUpdateWithoutGenerationInput {
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

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutMovesNestedInput, {
    nullable: true
  })
  type?: TypesUpdateOneRequiredWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsUpdateOneRequiredWithoutMovesNestedInput, {
    nullable: true
  })
  target?: MoveTargetsUpdateOneRequiredWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsUpdateOneWithoutMovesNestedInput, {
    nullable: true
  })
  effect?: MoveEffectsUpdateOneWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpdateOneWithoutMovesNestedInput, {
    nullable: true
  })
  contestType?: ContestTypesUpdateOneWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsUpdateOneWithoutMovesNestedInput, {
    nullable: true
  })
  contestEffect?: ContestEffectsUpdateOneWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsUpdateOneWithoutMovesNestedInput, {
    nullable: true
  })
  superContestEffect?: SuperContestEffectsUpdateOneWithoutMovesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateManyWithoutMoveNestedInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesUpdateManyWithoutMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => MachinesUpdateManyWithoutMoveNestedInput, {
    nullable: true
  })
  machines?: MachinesUpdateManyWithoutMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaUpdateManyWithoutMoveNestedInput, {
    nullable: true
  })
  meta?: MoveMetaUpdateManyWithoutMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateManyWithoutMoveNestedInput, {
    nullable: true
  })
  metaStatChanges?: MoveMetaStatChangesUpdateManyWithoutMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapUpdateManyWithoutMoveNestedInput, {
    nullable: true
  })
  flagMap?: MoveFlagMapUpdateManyWithoutMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosUpdateManyWithoutFirstMoveNestedInput, {
    nullable: true
  })
  contestCombos?: ContestCombosUpdateManyWithoutFirstMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosUpdateManyWithoutSecondMoveNestedInput, {
    nullable: true
  })
  contestCombosSecond?: ContestCombosUpdateManyWithoutSecondMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosUpdateManyWithoutFirstMoveNestedInput, {
    nullable: true
  })
  superContestCombos?: SuperContestCombosUpdateManyWithoutFirstMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosUpdateManyWithoutSecondMoveNestedInput, {
    nullable: true
  })
  superContestCombosSecond?: SuperContestCombosUpdateManyWithoutSecondMoveNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput, {
    nullable: true
  })
  knownMoves?: PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateNestedManyWithoutFirstMoveInput } from "../inputs/ContestCombosCreateNestedManyWithoutFirstMoveInput";
import { ContestCombosCreateNestedManyWithoutSecondMoveInput } from "../inputs/ContestCombosCreateNestedManyWithoutSecondMoveInput";
import { ContestEffectsCreateNestedOneWithoutMovesInput } from "../inputs/ContestEffectsCreateNestedOneWithoutMovesInput";
import { ContestTypesCreateNestedOneWithoutMovesInput } from "../inputs/ContestTypesCreateNestedOneWithoutMovesInput";
import { GenerationsCreateNestedOneWithoutMovesInput } from "../inputs/GenerationsCreateNestedOneWithoutMovesInput";
import { MachinesCreateNestedManyWithoutMoveInput } from "../inputs/MachinesCreateNestedManyWithoutMoveInput";
import { MoveDamageClassesCreateNestedOneWithoutMovesInput } from "../inputs/MoveDamageClassesCreateNestedOneWithoutMovesInput";
import { MoveFlagMapCreateNestedManyWithoutMoveInput } from "../inputs/MoveFlagMapCreateNestedManyWithoutMoveInput";
import { MoveMetaCreateNestedManyWithoutMoveInput } from "../inputs/MoveMetaCreateNestedManyWithoutMoveInput";
import { MoveMetaStatChangesCreateNestedManyWithoutMoveInput } from "../inputs/MoveMetaStatChangesCreateNestedManyWithoutMoveInput";
import { MoveTargetsCreateNestedOneWithoutMovesInput } from "../inputs/MoveTargetsCreateNestedOneWithoutMovesInput";
import { PokemonEvolutionCreateNestedManyWithoutKnownMoveInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutKnownMoveInput";
import { PokemonMovesCreateNestedManyWithoutMoveInput } from "../inputs/PokemonMovesCreateNestedManyWithoutMoveInput";
import { SuperContestCombosCreateNestedManyWithoutFirstMoveInput } from "../inputs/SuperContestCombosCreateNestedManyWithoutFirstMoveInput";
import { SuperContestCombosCreateNestedManyWithoutSecondMoveInput } from "../inputs/SuperContestCombosCreateNestedManyWithoutSecondMoveInput";
import { SuperContestEffectsCreateNestedOneWithoutMovesInput } from "../inputs/SuperContestEffectsCreateNestedOneWithoutMovesInput";
import { TypesCreateNestedOneWithoutMovesInput } from "../inputs/TypesCreateNestedOneWithoutMovesInput";

@TypeGraphQL.InputType("MovesCreateWithoutEffectInput", {})
export class MovesCreateWithoutEffectInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

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
    nullable: false
  })
  priority!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effect_chance?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedOneWithoutMovesInput, {
    nullable: false
  })
  generation!: GenerationsCreateNestedOneWithoutMovesInput;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutMovesInput, {
    nullable: false
  })
  type!: TypesCreateNestedOneWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveTargetsCreateNestedOneWithoutMovesInput, {
    nullable: false
  })
  target!: MoveTargetsCreateNestedOneWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveDamageClassesCreateNestedOneWithoutMovesInput, {
    nullable: false
  })
  damageClass!: MoveDamageClassesCreateNestedOneWithoutMovesInput;

  @TypeGraphQL.Field(_type => ContestTypesCreateNestedOneWithoutMovesInput, {
    nullable: true
  })
  contestType?: ContestTypesCreateNestedOneWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsCreateNestedOneWithoutMovesInput, {
    nullable: true
  })
  contestEffect?: ContestEffectsCreateNestedOneWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsCreateNestedOneWithoutMovesInput, {
    nullable: true
  })
  superContestEffect?: SuperContestEffectsCreateNestedOneWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateNestedManyWithoutMoveInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesCreateNestedManyWithoutMoveInput | undefined;

  @TypeGraphQL.Field(_type => MachinesCreateNestedManyWithoutMoveInput, {
    nullable: true
  })
  machines?: MachinesCreateNestedManyWithoutMoveInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCreateNestedManyWithoutMoveInput, {
    nullable: true
  })
  meta?: MoveMetaCreateNestedManyWithoutMoveInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateNestedManyWithoutMoveInput, {
    nullable: true
  })
  metaStatChanges?: MoveMetaStatChangesCreateNestedManyWithoutMoveInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateNestedManyWithoutMoveInput, {
    nullable: true
  })
  flagMap?: MoveFlagMapCreateNestedManyWithoutMoveInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosCreateNestedManyWithoutFirstMoveInput, {
    nullable: true
  })
  contestCombos?: ContestCombosCreateNestedManyWithoutFirstMoveInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosCreateNestedManyWithoutSecondMoveInput, {
    nullable: true
  })
  contestCombosSecond?: ContestCombosCreateNestedManyWithoutSecondMoveInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateNestedManyWithoutFirstMoveInput, {
    nullable: true
  })
  superContestCombos?: SuperContestCombosCreateNestedManyWithoutFirstMoveInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateNestedManyWithoutSecondMoveInput, {
    nullable: true
  })
  superContestCombosSecond?: SuperContestCombosCreateNestedManyWithoutSecondMoveInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutKnownMoveInput, {
    nullable: true
  })
  knownMoves?: PokemonEvolutionCreateNestedManyWithoutKnownMoveInput | undefined;
}
